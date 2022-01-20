import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTokens1642628478597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name : 'user_tokens',
                columns : [
                    {
                        name : 'id',
                        type : 'varchar',
                        isPrimary : true
                    },
                    {
                        name : 'token',
                        type : 'varchar',
                    },
                    {
                        name : 'user_id',
                        type : 'varchar'
                    },
                    {
                        name : 'created_at',
                        type : 'timestamp',
                        default : 'now()',
    
                    },
                    {
                        name : 'updated_at',
                        type : 'timestamp',
                        default : 'now()',
                        
                    }
                ],
                foreignKeys : [
                    {
                        name: 'TokenUser',
                        referencedTableName : 'users',
                        referencedColumnNames : ['id'],
                        columnNames : ['user_id'],
                        onDelete : 'CASCADE',
                        onUpdate : 'CASCADE'

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_tokens');
    }

}
