export class Product{
    constructor(
        id,
        title,
        price,
        description,
        category,
        image,
        rating
    ){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = Rating.fromJson(rating);
    }

    static fromJson(map) {  
        return new Product(
            map["id"],
            map["title"],
            map["price"],
            map["description"],
            map["category"],
            map["image"],
            map["rating"],
        )
    }
}

class Rating{
    constructor(
        rate,
        count
    ){
        this.rate = rate;
        this.count = count;
    }

    static fromJson(map) {  
        return new Rating(
            map["rate"],
            map["count"],
        )
    }
}