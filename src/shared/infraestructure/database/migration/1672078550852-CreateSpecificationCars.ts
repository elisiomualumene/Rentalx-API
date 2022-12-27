import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecificationCars1672078550852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'SpecificationCars',
                columns: [
                    {
                        name: 'car_id',
                        type: 'uuid'
                    },
                    {
                        name: 'specification_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            })
        )
        await queryRunner.createForeignKey(
            'SpecificationCars',
            new TableForeignKey({
                name: 'FKSpecificationCar',
                referencedTableName: 'Specification',
                referencedColumnNames: ['id'],
                columnNames: ['specification_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )

        await queryRunner.createForeignKey(
            'SpecificationCars',
            new TableForeignKey({
                name: 'FKCarSpecification',
                referencedTableName: 'Car',
                referencedColumnNames: ['id'],
                columnNames: ['car_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('SpecificationCars', 'FKCarSpecification');
        await queryRunner.dropForeignKey('SpecificationCar', 'FKSpecificationCar');
        await queryRunner.dropTable('SpecificationCars')
    }

}
