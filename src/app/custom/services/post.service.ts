import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post.model";
import { BE_URL } from "src/app/shared/constants";
import { EventEmitter, Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    posts: Post[] = [];

    getPosts() {
        return this.http
            .get<{ [key: string]: any }>(`${BE_URL}/posts.json`)
            .pipe(
                map((response) => {
                    const postsArray: Post[] = [];

                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            const { title, content } = response[key as keyof typeof response]
                            postsArray.push({ id: key, title, content })
                        }
                    }

                    return postsArray;
                })
            )
    }
}