import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRentals1672580567381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Rental',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true},
                    {name: 'car_id', type: 'uuid'},
                    {name: 'user_id', type: 'uuid'},
                    {name: 'star_date', type: 'timestamp', default: 'now()'},
                    {name: 'end_date', type: 'timestamp', isNullable: true},
                    {name: 'expected_return_date', type: 'timestamp'},
                    {name: 'total', type: 'numeric', isNullable: true},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ],
                foreignKeys: [
                    {
                        name: 'FKCarRental',
                        referencedTableName: 'Car',
                        referencedColumnNames: ['id'],
                        columnNames: ['car_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                    {
                        name: 'FKUserRental',
                        referencedTableName: 'User',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rentals')
    }

}
