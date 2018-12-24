import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/Calendar";
import "./styles/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toogleCheckIn = this.toogleCheckIn.bind(this);
    this.toogleCheckOut = this.toogleCheckOut.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.pickCheckIn = this.pickCheckIn.bind(this);
    this.pickCheckOut = this.pickCheckOut.bind(this);
    this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
    this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
    this.state = {
      price: 298,
      priceCountry: "zł",
      rating: 4,
      ratingAmount: 123,
      checkInVisible: false,
      checkOutVisible: false,
      checkInDate: "",
      checkOutDate: "",
      formDate: new Date(),
      availableDates: [
        "4/12/2018",
        "5/12/2018",
        "6/12/2018",
        "7/12/2018",
        "8/12/2018",
        "9/12/2018",
        "10/12/2018",
        "11/12/2018",
        "12/12/2018",
        "13/12/2018",
        "14/12/2018",
        "15/12/2018",
        "16/12/2018",
        "17/12/2018",
        "18/12/2018",
        "19/12/2018"
      ]
    };
  }

  toogleCheckIn() {
    this.setState(prevState => ({
      checkInVisible: !prevState.checkInVisible,
      checkOutVisible: false
    }));
  }

  toogleCheckOut() {
    this.setState(prevState => ({
      checkOutVisible: !prevState.checkOutVisible,
      checkInVisible: false
    }));
  }

  previousMonth() {
    this.setState(prevState => ({
      formDate: new Date(
        prevState.formDate.getFullYear(),
        prevState.formDate.getMonth() - 1,
        prevState.formDate.getDay()
      )
    }));
  }

  nextMonth() {
    this.setState(prevState => ({
      formDate: new Date(
        prevState.formDate.getFullYear(),
        prevState.formDate.getMonth() + 1,
        prevState.formDate.getDay()
      )
    }));
  }

  pickCheckIn(date) {
    this.setState(prevState => ({
      checkInDate:
        prevState.checkOutDate > date || prevState.checkOutDate == ""
          ? date
          : prevState.checkOutDate,
      checkInVisible: false
    }));
  }

  pickCheckOut(date) {
    this.setState(prevState => ({
      checkOutDate:
        prevState.checkInDate < date || prevState.checkInDate == ""
          ? date
          : prevState.checkInDate,
      checkOutVisible: false
    }));
  }

  onChangeCheckIn(event) {
    this.setState({
      checkOutDate: event.target.data
    });
  }

  onChangeCheckOut(event) {
    this.setState({
      checkOutDate: event.target.data
    });
  }

  render() {
    const {
      price,
      priceCountry,
      rating,
      ratingAmount,
      checkInVisible,
      checkOutVisible,
      formDate,
      availableDates,
      checkInDate,
      checkOutDate
    } = this.state;
    return (
      <Calendar
        price={price}
        priceCountry={priceCountry}
        rating={rating}
        ratingAmount={ratingAmount}
        checkInVisible={checkInVisible}
        checkOutVisible={checkOutVisible}
        toogleCheckIn={this.toogleCheckIn}
        toogleCheckOut={this.toogleCheckOut}
        formDate={formDate}
        nextMonth={this.nextMonth}
        previousMonth={this.previousMonth}
        availableDates={availableDates}
        pickCheckIn={this.pickCheckIn}
        pickCheckOut={this.pickCheckOut}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        onChangeCheckIn={this.onChangeCheckIn}
        onChangeCheckOut={this.onChangeCheckOut}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
