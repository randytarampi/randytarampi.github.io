import {DoubtBear} from "@randy.tarampi/js";
import {CampaignLink, ConnectedBear, F00pxLink, FlickrLink, InstagramLink, RowBlock} from "@randy.tarampi/jsx";
import React from "react";
import {Col} from "react-materialize";

const Works = () =>
    <RowBlock name="code">
        <Col className="block__text" l={7} m={8} s={12} offset="m2">
            <h2>
                <span className="text">Still reading eh?</span>
            </h2>
            <p>
                <span className="text">I've built a couple things of note that you might be interested in if you're into software. <CampaignLink
                    href="https://github.com/randytarampi/me/tree/master/packages/www#readme" text="This page"/> you're currently looking at, <CampaignLink
                    href="https://github.com/randytarampi/me/tree/master/packages/posts#readme" text="that blog"/> I was shilling earlier, a <CampaignLink
                    href="https://github.com/randytarampi/pseudolocalize.woof"
                    text="string pseudolocalization library"/> and an <CampaignLink
                    href="https://github.com/randytarampi/pseudolocalize.woof" text="image pseudolocalization library"/>.</span>
            </p>
            <p>
                <span className="text">One of those people that's interested in my photography? You'll find my favourite works on <CampaignLink
                    href="https://unsplash.com/@randytarampi">Unsplash</CampaignLink>. I stopped using <F00pxLink
                    useBranding={false} text="500px"/> ages ago, don't really upload much to <FlickrLink
                    useBranding={false} text="Flickr"/> and really only use <InstagramLink
                    useBranding={false} text="Instagram"/> when I'm on the road and shamed into sharing.</span>
            </p>
        </Col>
        <Col className="block__bear hide-on-med-and-down" l={5} s={12}>
            <ConnectedBear emoji={DoubtBear.fromJS()} id="code-bear"/>
        </Col>
    </RowBlock>;

export default Works;
