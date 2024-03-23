
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

@Entity({
  name: TABLE_NAMES.__entity__(constantCase),
})
export class __entity__(pascalCase)Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
     type: 'boolean',
    default: true
  })
  status: boolean;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    name: "created_at",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    name: "updated_at",
  })
  updateAt: Date;

  @DeleteDateColumn({
    type: "timestamp",
    name: "deleted_at",
  })
  deletedAt: Date;
}
