import * as React from 'react';
import styles from './Summary.module.scss';
import cashoutHeader from '../../resources/jsons/summaryHeaders.json';
import cashoutData from '../../resources/jsons/summaryData.json';
export default (class Summary extends React.PureComponent {
	state = {};

	componentDidMount() {}

	calculateFooter = (data, item) => {
		switch (item.footer) {
			case 'sum':
				return data.reduce((acc, row) => (acc += parseFloat(row[item.value])), 0);
			default:
				return item.footer;
		}
	};

	render() {
		console.log(cashoutHeader);
		console.log(cashoutData);
		const headers = cashoutHeader;
		//const data = cashoutData[0].summary;
		const datasumm = cashoutData;
		//{data.summary[0].boxoffice}
		return (	
			datasumm.map((data, x) => {
				return (
					<div className={styles.main}>
				<table className={styles.table}>
					<thead className={styles.mainHeader}>
						<tr className={styles.header}>
							{headers.map((header, i) => {
								return (
									<th key={i} className={styles.header_item}>
										{header.name}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className={styles.body}>
						{data.summary.map((item, i) => {
							return (
								<tr key={i} className={styles.row}>
									{headers.map((header, i) => {
										return <td className={styles.row_item}>{item[header.value]}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
					<tfoot className={styles.footer}>
						<tr className={styles.footer_row}>
							{headers.map((header, i) => {
								return <td  key={i} className={styles.footer_item}>{this.calculateFooter(data.summary, header)}</td>;
							})}
						</tr>
					</tfoot>
				</table>
			</div>
				);
			})					
			
		);
	}
});
