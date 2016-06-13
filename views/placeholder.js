import {Grid, Cell} from "react-mdl";
import {HelloBear} from "./bear";

export default ({name}) =>
	<Grid>
		<Cell col={12} tablet={8} phone={4}>
			<HelloBear />
		</Cell>
	</Grid>;