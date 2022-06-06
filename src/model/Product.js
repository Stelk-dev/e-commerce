export class Product{
    constructor(
        id,
        title,
        price,
        description,
        category,
        mainImage,
        images,
    ){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.mainImage = mainImage;
        this.images = images;
        this.titleWithNoSpace = title.split(' ').join('-');
    }

    static fromJson(map) {  
        return new Product(
            map["id"],
            map["title"],
            map["price"],
            map["description"],
            map["category"],
            map["main_image"],
            map["images"],
        )
    }
}