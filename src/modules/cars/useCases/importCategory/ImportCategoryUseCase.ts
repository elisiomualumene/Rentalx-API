import fs from 'fs'
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../../repositories/Category/implementation/ICategoryRepository';
import { IImportCategory } from '../../types/useCases';


class ImportCategoryUseCase{
    constructor(private categoryRepository: ICategoryRepository){}


    loadcateogries(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolver, reject) => {

            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = []

            const parseFile = parse({
                delimiter: ','
            });

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line;

                categories.push({name, description})
            })
            .on("end", () => {
                resolver(categories)
            })
            .on("error", (err) => {
                reject(err)
            })
        });
    };

    async  execute(file: Express.Multer.File): Promise<void> {
        const categories =  await this.loadcateogries(file);

        categories.map(category => {
            const {name, description} = category;

            const existCategory = this.categoryRepository.findByName(name);

            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })

        console.log(categories)
    }
}

export {ImportCategoryUseCase}