export class Blog {
    // field denotes whether it is related to Android, Angular, Productivity, etc
    constructor(public blog_id: number, public creation_date: string, public title: string, public field: string) {

    }
}
