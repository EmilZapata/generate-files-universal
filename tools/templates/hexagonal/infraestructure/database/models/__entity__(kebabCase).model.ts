
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn, 
  DeleteDateColumn, 
  UpdateDateColumn
} from 'typeorm';
import { TABLE_NAME } from '@shared/utils/constants/table.cst';

@Entity({
  name: TABLE_NAME.__entity__(constantCase),
})
export class __entity__(pascalCase)Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
     type: 'boolean',
    default: true
  })
  status: boolean;

  @Column({
    type: "int",
    nullable: false,
    name: "created_by",
  })
  createdBy: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    name: "created_at",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    name: "updated_at",
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: "timestamp",
    name: "deleted_at",
  })
  deletedAt: Date;
}
