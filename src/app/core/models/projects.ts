import { Task } from "./tasks";

export class Project {
id!: number;
title!:string;
description!:string;
tasks!:Task[];
}
