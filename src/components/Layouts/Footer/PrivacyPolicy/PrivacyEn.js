import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        lineHeight: '30px'
    },
    bold: {
        marginTop: '20px',
        marginBottom: '5px'
    }
}))

const PrivacyEn = () => {

    const classes = useStyles();

    return (
        <div className={classes.mainContent}>
            <p>
                <strong>
                    <em>
                        INFORMATION FOR THE PROCESSING OF PERSONAL DATA UNDER ARTICLES 13 &ndash; 14 EU REG. NO. 679/2016
                    </em>
                </strong>
            </p>
            TESORA SPA, in the person of the Legal Representative pro tempore Data Controller, Mr. Michele Giacomel, inform you,
            pursuant to articles 13 and 14 of EU Regulation no. 2016/679 (hereinafter "GDPR"), that the data provided by you
            will be processed in the manner and for the purposes described below;
            <ol>
                <li className={classes.bold}>
                    <strong>Object of the processing. </strong>
                </li>
                The Data Controller will process personal, identification, contact and tax data (for example: name, last name,
                company name, address, telephone, e-mail, bank and payment references, etc.) communicated by you at the time of
                signing the above contract and during the subsequent fulfillment.

                <li className={classes.bold}>
                    <strong>Purpose of data processing. </strong>
                </li>
                The processing is aimed at the correct and complete execution of the use of the Tesora platform. Your data will also
                be processed in order to:
                <div style={{ marginLeft: '20px' }}>
                    a) fulfill the obligations provided for in the tax and accounting area;<br />
                    b) comply with the
                    obligations incumbent on the Grantor as provided for by current legislation. Your personal data may be processed by
                    means of both paper and computer files (including portable devices) and in the manner necessary to meet the
                    above-mentioned purposes. The personal data communicated will be processed without your express consent as allowed
                    by art. 6 EU Reg. 679/2016.
                </div>

                <li className={classes.bold}>
                    <strong>Methods of processing. </strong>
                </li>
                The processing of your personal data is carried out by means of the operations indicated in art. 4 no. 2 of the GDPR
                and precisely: collection, recording, organization, structuring, storage, adaptation or modification, retrieval,
                consultation, use, disclosure by transmission, alignment or combination, restriction, erasure or destruction of
                data.The processing is carried out by persons in charge and collaborators within the scope of their respective
                functions and in accordance with the instructions received, always and only for the achievement of specific
                purposes, scrupulously respecting the principles of confidentiality and security required by applicable regulations.
                <li className={classes.bold}>
                    <strong>Access to data. </strong>
                </li>
                Your data may be made accessible for the purposes set out in point 2 above: <br />
                a) to the Data Controller & rsquo; s
                employees and collaborators in their capacity as data processors and / or system administrators; <br />
                b) to companies associated with the Data Controller as well as their employees and collaborators; <br />
                c) to third party companies or other subjects(by way of indication: professional firms, consultants, etc.) that carry out outsourcing activities
                on behalf of the Data Controller; <br />
                d) banking and insurance institutions that provide services functional to the
                obligations under the contract signed; <br />
                e) parties that process data in execution of specific legal obligations; <br />
                f) judicial or administrative authorities for the fulfillment of legal obligations(e.g.anti - money laundering).
                <li className={classes.bold}>
                    <strong>Data communication. </strong>
                </li>
                The Data Controller, in accordance with the provisions of art. 45 of the Regulation, for the purposes of the
                execution of the contract, will communicate your data to the company that manages the treasury.
                <li className={classes.bold}>
                    <strong>Data Retention. </strong>
                </li>
                All personal data provided will be processed in compliance with the principles of lawfulness, correctness, relevance
                and proportionality and in the manner strictly necessary to pursue the purposes described above.The personal data
                will be kept for 10(ten) years from the termination of the contract.
                <li className={classes.bold}>
                    <strong>Rights of the data subject. </strong>
                </li>
                In accordance with articles 15 to 22 of EU Reg.No 679 / 2016, the data subject has the possibility to exercise
                specific rights.In particular, the interested party has the right to: <br />
                a) obtain confirmation of the existence of processing of personal data concerning him / her and, if so, access to such data; <br />
                b) obtain rectification of inaccurate personal data and completion of incomplete personal data; <br />
                c) obtain erasure of personal data concerning him / her, where this is permitted by the Regulation; <br />
                d) to restrict the processing, in the cases provided for by the Regulation; <br />
                e) have a notification sent to each of his / her recipients to whom his / her personal data has been disclosed, regarding any rectification or erasure or restriction of his / her personal data carried out in accordance
                with the GDPR, unless this proves or involves disproportionate effort; <br />
                f) to receive, in a structured, commonly used and machine - readable format, personal data provided to the Data Controller, as well as the transmission of such data
                to another data controller, and this at any time, including the termination of any relations with the Data
                Controller; <br />
                g) to object at any time, on grounds related to his / her particular situation, to the processing of
                personal data concerning him / her pursuant to article 6, paragraph 1, letters(e) or(f), including profiling on the
                basis of these provisions.Where personal data are processed for direct marketing purposes, the data subject has the
                right to object at any time to the processing of personal data relating to him / her carried out for such purposes,
                including profiling to the extent that it is related to such direct marketing; <br />
                h) lodge a complaint with a supervisory authority pursuant to article 77 of Regulation(EU) No. 679 / 2016.
                <li className={classes.bold}>
                    <strong>Methods of exercising rights. </strong>
                </li>
                You may at any time exercise your rights by contacting the Data Controller at the following addresses: Head of the
                department of Tesora & rsquo;s Customer Service: e - mail: privacy @tesora.io.
            </ol >
            <p>
                CONSENT TO THE PROCESSING OF PERSONAL DATA EX ART. 13 - 14 EU REG. NO. 679/2016
            </p>
            <p>
                Having read this information, the undersigned declares to have understood its contents and to have received a copy.
                The undersigned also declares his/her consent to the processing of his/her personal data for the purposes and
                according to the modalities indicated in the above information for which this consent represents the legal basis of
                the processing.
            </p>
            <p>
                Place: ______________________________ Date: _________________ Signature: ___________________________
            </p>
        </div >
    )
}

export default PrivacyEn;