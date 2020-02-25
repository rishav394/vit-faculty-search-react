import React, { Component } from 'react';
import $ from 'jquery';
import M from 'materialize-css';

class TimeTable extends Component {
	state = {};

	componentDidMount() {
		const { www } = this.props;
		www.forEach(item => {
			$('td.' + item.SLOT + '').css('background-color', '#CCFF33');
			$('td.' + item.SLOT + '').append(
				'<br>',
				item.VENUE + '<br>' + item.COURSECODE,
			);
			$('td.' + item.SLOT + '').addClass('tooltipped');
			$('td.' + item.SLOT + '').attr('data-position', 'bottom');
			$('td.' + item.SLOT + '').attr('data-tooltip', item.COURSETITLE);
		});

		M.AutoInit();
	}

	render() {
		return (
			<div className="container flow-text center" style={{ marginBottom: 40 }}>
				<p className="flow-text">Faculty Time Table</p>
				<table className="timetable">
					<tbody>
						<tr className="theoryTime">
							<td rowSpan="2" className="greyMatter">
								Theory
							</td>
							<td className="greyMatter">Start</td>
							<td>08:00</td>
							<td>09:00</td>
							<td>10:00</td>
							<td>11:00</td>
							<td>12:00</td>
							<td>-</td>
							<td>Lunch</td>
							<td>14:00</td>
							<td>15:00</td>
							<td>16:00</td>
							<td>17:00</td>
							<td>18:00</td>
							<td>18:50</td>
							<td>19:01</td>
						</tr>
						<tr className="theoryTime">
							<td className="greyMatter">End</td>
							<td>08:50</td>
							<td>09:50</td>
							<td>10:50</td>
							<td>11:50</td>
							<td>12:50</td>
							<td>-</td>
							<td>Lunch</td>
							<td>14:50</td>
							<td>15:50</td>
							<td>16:50</td>
							<td>17:50</td>
							<td>18:50</td>
							<td>19:00</td>
							<td>19:50</td>
						</tr>

						<tr className="labTime">
							<td rowSpan="2" className="greyMatter">
								Lab
							</td>
							<td className="greyMatter">Start</td>
							<td>08:00</td>
							<td>08:46</td>
							<td>10:00</td>
							<td>10:46</td>
							<td>11:31</td>
							<td>12:16</td>
							<td>Lunch</td>
							<td>14:00</td>
							<td>14:46</td>
							<td>16:00</td>
							<td>16:46</td>
							<td>17:31</td>
							<td>18:16</td>
							<td>-</td>
						</tr>
						<tr className="labTime">
							<td className="greyMatter">End</td>
							<td>08:45</td>
							<td>09:30</td>
							<td>10:45</td>
							<td>11:30</td>
							<td>12:15</td>
							<td>13:00</td>
							<td>Lunch</td>
							<td>14:45</td>
							<td>15:30</td>
							<td>16:45</td>
							<td>17:30</td>
							<td>18:15</td>
							<td>19:00</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								MON
							</td>
							<td className="greyMatter">Theory</td>
							<td className="A1">A1</td>
							<td className="F1">F1</td>
							<td className="D1">D1</td>
							<td className="TB1">TB1</td>
							<td className="TG1">TG1</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="A2">A2</td>
							<td className="F2">F2</td>
							<td className="D2">D2</td>
							<td className="TB2">TB2</td>
							<td className="TG2">TG2</td>
							<td>-</td>
							<td className="V3">V3</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L1">L1</td>
							<td className="L2">L2</td>
							<td className="L3">L3</td>
							<td className="L4">L4</td>
							<td className="L5">L5</td>
							<td className="L6">L6</td>
							<td className="greyMatter">Lunch</td>
							<td className="L31">L31</td>
							<td className="L32">L32</td>
							<td className="L33">L33</td>
							<td className="L34">L34</td>
							<td className="L35">L35</td>
							<td className="L36">L36</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan="2" className="greyMatter">
								TUE
							</td>
							<td className="greyMatter">Theory</td>
							<td className="B1">B1</td>
							<td className="G1">G1</td>
							<td className="E1">E1</td>
							<td className="TC1">TC1</td>
							<td className="TAA1">TAA1</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="B2">B2</td>
							<td className="G2">G2</td>
							<td className="E2">E2</td>
							<td className="TC2">TC2</td>
							<td className="TAA2">TAA2</td>
							<td>-</td>
							<td className="V4">V4</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L7">L7</td>
							<td className="L8">L8</td>
							<td className="L9">L9</td>
							<td className="L10">L10</td>
							<td className="L11">L11</td>
							<td className="L12">L12</td>
							<td className="greyMatter">Lunch</td>
							<td className="L37">L37</td>
							<td className="L38">L38</td>
							<td className="L39">L39</td>
							<td className="L40">L40</td>
							<td className="L41">L41</td>
							<td className="L42">L42</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								WED
							</td>
							<td className="greyMatter">Theory</td>
							<td className="C1">C1</td>
							<td className="A1">A1</td>
							<td className="F1">F1</td>
							<td className="V1">V1</td>
							<td className="V2">V2</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="C2">C2</td>
							<td className="A2">A2</td>
							<td className="F2">F2</td>
							<td className="TD2">TD2</td>
							<td className="TBB2">TBB2</td>
							<td>-</td>
							<td className="V5">V5</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L13">L13</td>
							<td className="L14">L14</td>
							<td className="L15">L15</td>
							<td className="L16">L16</td>
							<td>-</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="L43">L43</td>
							<td className="L44">L44</td>
							<td className="L45">L45</td>
							<td className="L46">L46</td>
							<td className="L47">L47</td>
							<td className="L48">L48</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								THU
							</td>
							<td className="greyMatter">Theory</td>
							<td className="D1">D1</td>
							<td className="B1">B1</td>
							<td className="G1">G1</td>
							<td className="TE1">TE1</td>
							<td className="TCC1">TCC1</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="D2">D2</td>
							<td className="B2">B2</td>
							<td className="G2">G2</td>
							<td className="TE2">TE2</td>
							<td className="TCC2">TCC2</td>
							<td>-</td>
							<td className="V6">V6</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L19">L19</td>
							<td className="L20">L20</td>
							<td className="L21">L21</td>
							<td className="L22">L22</td>
							<td className="L23">L23</td>
							<td className="L24">L24</td>
							<td className="greyMatter">Lunch</td>
							<td className="L49">L49</td>
							<td className="L50">L50</td>
							<td className="L51">L51</td>
							<td className="L52">L52</td>
							<td className="L53">L53</td>
							<td className="L54">L54</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								FRI
							</td>
							<td className="greyMatter">Theory</td>
							<td className="E1">E1</td>
							<td className="C1">C1</td>
							<td className="TA1">TA1</td>
							<td className="TF1">TF1</td>
							<td className="TD1">TD1</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td className="E2">E2</td>
							<td className="C2">C2</td>
							<td className="TA2">TA2</td>
							<td className="TF2">TF2</td>
							<td className="TDD2">TDD2</td>
							<td>-</td>
							<td className="V7">V7</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L25">L25</td>
							<td className="L26">L26</td>
							<td className="L27">L27</td>
							<td className="L28">L28</td>
							<td className="L29">L29</td>
							<td className="L30">L30</td>
							<td className="greyMatter">Lunch</td>
							<td className="L55">L55</td>
							<td className="L56">L56</td>
							<td className="L57">L57</td>
							<td className="L58">L58</td>
							<td className="L59">L59</td>
							<td className="L60">L60</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								SAT
							</td>
							<td className="greyMatter">Theory</td>
							<td className="V8">V8</td>
							<td>X11</td>
							<td>X12</td>
							<td>Y11</td>
							<td>Y12</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td>X21</td>
							<td>Z21</td>
							<td>Y21</td>
							<td>W21</td>
							<td>W22</td>
							<td>-</td>
							<td className="V9">V9</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L71">L71</td>
							<td className="L72">L72</td>
							<td className="L73">L73</td>
							<td className="L74">L74</td>
							<td className="L75">L75</td>
							<td className="L76">L76</td>
							<td className="greyMatter">Lunch</td>
							<td className="L77">L77</td>
							<td className="L78">L78</td>
							<td className="L79">L79</td>
							<td className="L80">L80</td>
							<td className="L81">L81</td>
							<td className="L82">L82</td>
							<td>-</td>
						</tr>
						<tr className="theorySlots">
							<td rowSpan=" 2" className="greyMatter">
								SUN
							</td>
							<td className="greyMatter">Theory</td>
							<td className="V10">V10</td>
							<td>Y11</td>
							<td>Y12</td>
							<td>X11</td>
							<td>X12</td>
							<td>-</td>
							<td className="greyMatter">Lunch</td>
							<td>Y21</td>
							<td>Z21</td>
							<td>X21</td>
							<td>W21</td>
							<td>W22</td>
							<td>-</td>
							<td className="V11">V11</td>
						</tr>
						<tr>
							<td className="greyMatter">Lab</td>
							<td className="L83">L83</td>
							<td className="L84">L84</td>
							<td className="L85">L85</td>
							<td className="L86">L86</td>
							<td className="L87">L87</td>
							<td className="L88">L88</td>
							<td className="greyMatter">Lunch</td>
							<td className="L89">L89</td>
							<td className="L90">L90</td>
							<td className="L91">L91</td>
							<td className="L92">L92</td>
							<td className="L93">L93</td>
							<td className="L94">L94</td>
							<td>-</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default TimeTable;
