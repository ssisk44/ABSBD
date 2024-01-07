import { Componen, useState } from "react";
import Chart from "react-apexcharts";

export default createBarGraph = () => {
	const [answer, setAnswer] = useState('');
	const [error, setError] = useState(null);
	const [status, setStatus] = useState('typing');

	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					id: "Sam's Bar Graph"
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
				}
			},
			series: [
				{
					name: "Average Test Scores",
					data: [86, 45, 65, 87, 79, 81, 70, 91]
				}
			]
		};
	}

	return (
		<div className="app">
			<div className="row">
				<div className="mixed-chart">
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="bar"
						width="500"
					/>
				</div>
			</div>
		</div>
	);
}

