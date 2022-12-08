import { AppError } from "../../../../shared/errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/Category/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./createCategoryUseCase"


let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe("create Category", () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
    })

  it("should be able to create a new category", async () => {
    const category = {
        name: 'Category Test',
        Description: 'Category Description Test'
    }
    await createCategoryUseCase.execute({name: category.name, description: category.Description})

    const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)

    expect(categoryCreated).toHaveProperty('id');
  })


  it("should not be able to create a new category that name already exists", async () => {

    expect(async () => {
        const category = {
            name: 'Category Test',
            Description: 'Category Description Test'
        }
        await createCategoryUseCase.execute({name: category.name, description: category.Description});
        await createCategoryUseCase.execute({name: category.name, description: category.Description});
    }).rejects.toBeInstanceOf(AppError)
  })
})