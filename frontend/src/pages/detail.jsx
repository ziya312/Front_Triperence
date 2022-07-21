import Header from "components/Header/header";
import "components/Pages/detail.css"
import Box from "components/common/ckd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Heart from "../components/common/heart";
import I from 'icons/img_19975_1.jpg';
import Y from 'icons/스토리_(5).jpg';

const Detail = (props) => {

    return (
        <div>
            <section className="section">

                <article className="categorie">
                    Jeju Juju-si
                </article>

                <article className="title">
                    Hagwi Aewol Coastal Road (하귀애월해안도로)
                    <Heart/>
                </article>

                <article className="images">
                    <img className="img1" src={I} alt=""/>
                    <img className="img2" src={Y} alt=""/>
                    <img className="img3" src={I} alt=""/>
                    <img className="img4" src={Y} alt=""/>
                </article>

                <Box />

                <article className='Information' >
                    img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. img elements must have an alt prop, either with meaningful text, or an empty string for decorative images

                </article>

                <hr/>

                <article className='Details'>
                    <img className='details' src={require("icons/p.svg").default} alt=""/>
                    img elements must have an alt prop
                    <CopyToClipboard text="ㅇ3ㅇ">
                        <img className='d' src={require("icons/ss.svg").default} onClick={() => alert("Copy success")} alt=""/>

                    </CopyToClipboard>
                </article>

                <article className='Details'>
                    <img className='details' src={require("icons/t.svg").default} alt=""/>
                    img elements must have an alt prop
                </article>

                <article className='Details' style={{marginBottom:'24px'}}>
                    <img className='details' src={require("icons/w.svg").default} alt=""/>
                    img elements must have an alt prop
                </article>

                <hr/>

                <article>

                </article>

                <hr/>

            </section>
        </div>
    )



}
export default Detail;