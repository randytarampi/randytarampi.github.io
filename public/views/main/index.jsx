import {logger} from "@randy.tarampi/jsx";
import React, {Component, Fragment} from "react";
import Helmet from "react-helmet";
import {Container} from "react-materialize";
import Bears from "./bears";
import Intro from "./intro";
import Works from "./works";

export class Main extends Component {
    componentDidMount() {
        logger.info(`My blog is a lot more fun (content and code wise), so check that out:\n\t\t${window.location.origin}${__POSTS_APP_URL__}`);
    }

    render() {
        return <Fragment>
            <Helmet>
            </Helmet>
            <Container>
                <Intro/>
                <Works/>
                <Bears/>
            </Container>
        </Fragment>;
    }
}

export default Main;
