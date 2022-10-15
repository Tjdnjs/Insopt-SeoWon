import { Member } from './member'

type member_string = Member[] | string[];

export interface Dinner{
    member: Member[];
    menu: string[];
    shuffle: (data: member_string) => member_string;
    organize: (data: Member[]) => void;
}
