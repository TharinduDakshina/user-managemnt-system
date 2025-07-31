"use client";
import UserList from "@/app/userList/page";
import UserAdd from "@/app/userAdd/page";
import {useState} from "react";

export default function Home() {
    const [page, setPage] = useState("userList");

    let Content;
    if (page === "userList") Content = UserList; else if (page === "userAdd") Content = UserAdd;

    return (
        <Content/>
    );
}
