import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';
export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'VolvoS',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'ToyotaS',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'HondaS',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'JeepS',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'TeslaS',
        createdAt: new Date().getTime(),
    }
]