import Nav from "./Nav";
import { Link } from "react-router-dom";
import "../styles/layout/PageTitle.scss";
import Ali from "../images/pareja.jpeg"

const AboutMe = ( )=> {
return (
    <>
        <Nav/>
        <section>
            <div className="page__title--container">
                <Link to="/" className="page__title--link">
                <i className="fa-solid fa-arrow-left page__title--arrow"></i>
                </Link>
                <h1 className="page__title">Sobre Mí</h1>
            </div>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil veritatis ullam quidem animi praesentium distinctio beatae possimus, veniam voluptates assumenda modi doloribus molestias tenetur suscipit aliquid. Provident, nemo molestias?
                Esse quo nisi veniam possimus adipisci, neque officiis cupiditate ex rem magnam repellendus maxime consequatur debitis eos facere vel magni excepturi dolor impedit suscipit voluptas aperiam. Ad voluptas quaerat distinctio?
                Vitae aliquid labore tempore. Unde perspiciatis quasi vitae ut, blanditiis molestiae quidem adipisci natus quisquam fugiat laudantium quia nostrum, nemo reiciendis ipsa id libero! Debitis totam qui doloribus est officiis!
                Vero amet ipsa odit ex suscipit. Dolor consequuntur, reiciendis quis iste dolores quaerat ullam eos hic commodi neque excepturi illum in eaque nostrum, nesciunt corrupti? Culpa doloribus accusantium odio ipsum?</p>
            </article>
            <article>
                <img src={Ali} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil veritatis ullam quidem animi praesentium distinctio beatae possimus, veniam voluptates assumenda modi doloribus molestias tenetur suscipit aliquid. Provident, nemo molestias?
                Esse quo nisi veniam possimus adipisci, neque officiis cupiditate ex rem magnam repellendus maxime consequatur debitis eos facere vel magni excepturi dolor impedit suscipit voluptas aperiam. Ad voluptas quaerat distinctio?
                Vitae aliquid labore tempore. Unde perspiciatis quasi vitae ut, blanditiis molestiae quidem adipisci natus quisquam fugiat laudantium quia nostrum, nemo reiciendis ipsa id libero! Debitis totam qui doloribus est officiis!
                Vero amet ipsa odit ex suscipit. Dolor consequuntur, reiciendis quis iste dolores quaerat ullam eos hic commodi neque excepturi illum in eaque nostrum, nesciunt corrupti? Culpa doloribus accusantium odio ipsum?</p>
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil veritatis ullam quidem animi praesentium distinctio beatae possimus, veniam voluptates assumenda modi doloribus molestias tenetur suscipit aliquid. Provident, nemo molestias?
                Esse quo nisi veniam possimus adipisci, neque officiis cupiditate ex rem magnam repellendus maxime consequatur debitis eos facere vel magni excepturi dolor impedit suscipit voluptas aperiam. Ad voluptas quaerat distinctio?
                Vitae aliquid labore tempore. Unde perspiciatis quasi vitae ut, blanditiis molestiae quidem adipisci natus quisquam fugiat laudantium quia nostrum, nemo reiciendis ipsa id libero! Debitis totam qui doloribus est officiis!
                Vero amet ipsa odit ex suscipit. Dolor consequuntur, reiciendis quis iste dolores quaerat ullam eos hic commodi neque excepturi illum in eaque nostrum, nesciunt corrupti? Culpa doloribus accusantium odio ipsum?</p>
            </article>
        </section>
    </>
)}
export default AboutMe;