import React from "react";
import "./Checkout.css";

const Checkout = ({ items, total, shippingCost }) => {
    return (
        <div className="checkout-content">
            <div className="contact-info">
                    <p className="contactTitle">Kontakt</p>
                        <input type="email" id="email" name="email" placeholder="E-Mail"/>
                        <div className="lieferungContent">
                            <p className="lieferungTitle">Lieferung</p>
                            <select className="selectCountry" id="country-select" onchange="updateCountryInput()">
                                <option value="" disabled selected>Select a country</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Italy">Italy</option>
                            </select>
                            <input className="inputFieldLieferung" type="vorname" id="vorname" name="vorname" placeholder="Vorname"/>
                            <input className="inputFieldLieferung" type="nachname" id="nachname" name="nachname" placeholder="Nachname"/>
                            <input className="inputFieldLieferung" type="adresse" id="adresse" name="adresse" placeholder="Adresse"/>
                            <input className="inputFieldLieferung" type="postleitzahl" id="postleitzahl" name="postleitzahl" placeholder="Postleitzahl"/>
                            <input className="inputFieldLieferung" type="stadt" id="stadt" name="stadt" placeholder="Stadt"/>
                        </div>
                    <p className="paymentContentTitle">Zahlungsmethode</p>
                    <div className="checkoutButton" id="checkoutButtonDiv">
                        <button className="payNowButton" id="payNowButton">Jetzt Bezahlen</button>
                    </div>
            </div>
            <div className="checkout-summary">
                <div className="checkoutSummary">
                    <div className="checkout-summary-item">
                        <span>Gesamt:</span>
                        <span>{total}€</span>
                    </div>
                    <div className="checkout-summary-item">
                        <span>Versandkosten:</span>
                        <span>{shippingCost}€</span>
                    </div>
                    <div className="checkout-summary-item">
                        <span>Du zahlst:</span>
                        <span>{total + shippingCost}€</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;