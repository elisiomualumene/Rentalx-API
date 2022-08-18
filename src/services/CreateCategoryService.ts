interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService{
    execute({ name, description }: IRequest){
        const cateogryAlreadyExists = repositoryCategories.findByName(name);

        if(cateogryAlreadyExists) {
            throw new Error("Category Already exists!")
        }

        repositoryCategories.create({name, description})
    }
}

export { CreateCategoryService };