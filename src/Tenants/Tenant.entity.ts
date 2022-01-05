import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";
import {TenantConfig} from "./TenantConfig";

@Entity({
    name: "tenants",
    schema: 'public'
})
@Unique(["_code"])
export class Tenant {
    @PrimaryGeneratedColumn('uuid')
    private _id: string;

    @Column()
    private _name: string;

    @Column()
    private _code: string;

    // @Column("jsonb")
    // private _config: TenantConfig;

    @CreateDateColumn()
    private _createdAt: Date;

    @UpdateDateColumn()
    private _updatedAt: Date;

    @DeleteDateColumn()
    private _deletedAt: Date;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    get deletedAt(): Date {
        return this._deletedAt;
    }

    set deletedAt(value: Date) {
        this._deletedAt = value;
    }
}