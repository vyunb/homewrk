import React from "react";

import Parallax, { Layer } from "react-parallax-scroll";

import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { useStyles } from "containers/styles/useStyles";

import s from "./index.css";

class FrontText extends React.Component {
	render() {
		const { classes } = this.props;

		const textTOP = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
		const textBOT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

		return (
			<Parallax>
				<div className={s.bit}>
					<Typography variant="h1" className={`${classes.outlinedHiddenText} ${classes.mainText} ${classes.textOnBot}`}>
						<Layer settings={{ speed: 1, type: ["translateX"] }}>
							<span className={`${s.outlinedText} ${s.row}`}>
								<span>{textTOP}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.filledHiddenText} ${classes.mainText} ${classes.textOnBot}`}>
						<Layer settings={{ speed: 1, type: ["translateX"] }}>
							<span className={s.row}>
								<span>{textTOP}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.outlinedHiddenText} ${classes.mainText} ${classes.textOnTop}`}>
						<Layer settings={{ speed: -1, type: ["translateX"] }}>
							<span className={`${s.outlinedText} ${s.row}`}>
								<span>{textBOT}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.filledHiddenText} ${classes.mainText} ${classes.textOnTop}`}>
						<Layer settings={{ speed: -1, type: ["translateX"] }}>
							<span className={s.row}>
								<span>{textBOT}</span>
							</span>
						</Layer>
					</Typography>
				</div>
			</Parallax>
		);
	}
}

FrontText.propTypes = {
	classes: PropTypes.object.isRequired,
};

export const Text = withStyles(useStyles)(FrontText);
