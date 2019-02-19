import "todomvc-app-css/index.css";
import { render, createElement, Div, Span } from "@adolgarev/domwrapper";

const todoappElement = createElement("section").setAttribute("class", "todoapp");
const headerElement = createElement("header")
    .setAttribute("class", "header")
    .setChildren(
        createElement("h1").setChildren("todos"),
        createElement("input")
            .setAttribute("class", "new-todo")
            .setAttribute("placeholder", "What needs to be done?")
            .setAttribute("autofocus", true)
    );
const mainElement = createElement("section")
    .setAttribute("class", "main")
    .setChildren(
        createElement("input")
            .setAttribute("id", "toggle-all")
            .setAttribute("class", "toggle-all")
            .setAttribute("type", "checkbox"),
        createElement("label")
            .setAttribute("htmlFor", "toggle-all")
            .setChildren("Mark all as complete"),
        createElement("ul")
            .setAttribute("class", "todo-list")
            .setChildren(
                createElement("li")
                    .setAttribute("class", "completed")
                    .setChildren(
                        Div()
                            .setAttribute("class", "view")
                            .setChildren(
                                createElement("input")
                                    .setAttribute("class", "toggle")
                                    .setAttribute("type", "checkbox")
                                    .setAttribute("checked", true),
                                createElement("label")
                                    .setChildren("Taste JavaScript"),
                                createElement("button")
                                    .setAttribute("class", "destroy")
                            ),
                        createElement("input")
                            .setAttribute("class", "edit")
                            .setAttribute("value", "Create a TodoMVC template")
                    ),
                createElement("li")
                    .setChildren(
                        Div()
                            .setAttribute("class", "view")
                            .setChildren(
                                createElement("input")
                                    .setAttribute("class", "toggle")
                                    .setAttribute("type", "checkbox")
                                    .setAttribute("checked", false),
                                createElement("label")
                                    .setChildren("Buy a unicorn"),
                                createElement("button")
                                    .setAttribute("class", "destroy")
                            ),
                        createElement("input")
                            .setAttribute("class", "edit")
                            .setAttribute("value", "Rule the web")
                    )
            )
    );
const footerElement = createElement("footer")
    .setAttribute("class", "footer")
    .setChildren(
        Span()
            .setAttribute("class", "todo-count")
            .setChildren(
                createElement("strong").setChildren("0"),
                " item left"
            ),
        createElement("ul")
            .setAttribute("class", "filters")
            .setChildren(
                createElement("li").setChildren(createElement("a")
                    .setAttribute("class", "selected")
                    .setAttribute("href", "#/")
                    .setChildren("All")
                ),
                createElement("li").setChildren(createElement("a")
                    .setAttribute("href", "#/active")
                    .setChildren("Active")
                ),
                createElement("li").setChildren(createElement("a")
                    .setAttribute("href", "#/completed")
                    .setChildren("Completed")
                )
            ),
        createElement("button")
            .setAttribute("class", "clear-completed")
            .setChildren("Clear completed")
    );

todoappElement.setChildren(headerElement, mainElement, footerElement);

render(todoappElement, document.getElementsByTagName("body")[0]);

function InfoElement(text, link, linkText) {
    const container = createElement("p");
    if (link !== undefined) {
        container.setChildren(
            text,
            " ",
            createElement("a").setAttribute("href", link).setChildren(linkText),
        );
    } else {
        container.setChildren(text);
    }
    return container;
}

function InfoListElement(infos) {
    return createElement("footer")
        .setAttribute("class", "info")
        .setChildren(infos);
}

render(InfoListElement(
    InfoElement("Double-click to edit a todo"),
    InfoElement("Template by", "http://sindresorhus.com", "Sindre Sorhus"),
    InfoElement("Created by", "http://todomvc.com", "you"),
    InfoElement("Part of", "http://todomvc.com", "TodoMVC")
), document.getElementsByTagName("body")[0]);
