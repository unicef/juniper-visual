import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TransactionDetails } from "./TransactionDetails";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f3f3f3",
  },
}));

export const Received = () => {
  const classes = useStyles();
  function TXDetailRowCreate(
    from: string,
    recipient: string,
    amount: string,
    time: string,
    txhash: string
  ) {
    return { from, recipient, amount, time, txhash };
  }

  const TXTableRows1 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "100 ETH",
      "07 Oct 2019 13:56 UTC",
      "https://etherscan.io/tx/0x659566ad82bf3fb89c54b3ce25583df0138605272381aaf7ff3883b2d9e651e0"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "100 ETH",
      "07 Oct 2019 15:08 UTC",
      "https://etherscan.io/tx/0xec285bbbe747076618ebcaf13f44553cbef068ee330c73a83cce8c356ef259e6"
    ),
  ];
  const TXTableRows2 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "1 BTC",
      "07 Oct 2019 14:02 UTC",
      "https://btc4.trezor.io/tx/8bab8a3286e7a1b2b93ed86588a98876e8de510c5e8ad3922abb2351b49b43f7"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "1 BTC",
      "07 Oct 2019 15:57 UTC",
      "https://btc4.trezor.io/tx/396e16f8ec98dacfc56ee0b0c00aedc1a94af203050b428ae7eb08d17019846b"
    ),
  ];
  const TXTableRows14 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "1200 ETH",
      "15 Jun 2020 05:03 UTC",
      "https://etherscan.io/tx/0x7034df9c87f950902d0f3a2f431aebea854c0d2e2fa6dca8ab127362711bbd11"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "1200 ETH",
      "15 Jun 2020 05:47 UTC",
      "https://etherscan.io/tx/0xc402f498a730b99d0105cfa3b49c483bd6f143a8c0ab082d0e2b63e8de3fd854"
    ),
  ];
  const TXTableRows15 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "800 ETH",
      "12 Oct 2020 15:28 UTC",
      "https://etherscan.io/tx/0xc56c7adae5afc4d36b1ed827fb3acc40745134e607846fcee9df5a5172eef822"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "800 ETH",
      "12 Oct 2020 16:04 UTC",
      "https://etherscan.io/tx/0x2d3fd9ea17362aa787f978b8be889e8799a2ba80c2006bdd74995b404c31fb02"
    ),
  ];
  return (
    <div className={classes.root}>
            <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="800 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows15}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"800 ETH"} // amount
        field4={"12 Oct 2020 15:28 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xc56c7adae5afc4d36b1ed827fb3acc40745134e607846fcee9df5a5172eef822"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"800 ETH"} // amount
        field9={"12 Oct 2020 16:04 UTC"} // time
        field10={
          "https://etherscan.io/tx/0x2d3fd9ea17362aa787f978b8be889e8799a2ba80c2006bdd74995b404c31fb02"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="1200 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows14}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"1200 ETH"} // amount
        field4={"15 Jun 2020 17:03 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x7034df9c87f950902d0f3a2f431aebea854c0d2e2fa6dca8ab127362711bbd11"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"1200 ETH"} // amount
        field9={"15 Jun 2020 17:47 UTC"} // time
        field10={
          "https://etherscan.io/tx/0xc402f498a730b99d0105cfa3b49c483bd6f143a8c0ab082d0e2b63e8de3fd854"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="100 ETH"
        valueType="Crypto Received"
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"100 ETH"} // amount
        field4={"07 Oct 2019 13:56 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x659566ad82bf3fb89c54b3ce25583df0138605272381aaf7ff3883b2d9e651e0"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"100 ETH"} // amount
        field9={"07 Oct 2019 15:08 UTC"} // time
        field10={
          "https://etherscan.io/tx/0xec285bbbe747076618ebcaf13f44553cbef068ee330c73a83cce8c356ef259e6"
        } // tx link
        TXTableRows={TXTableRows1}
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="1 BTC"
        valueType="Crypto Received"
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"1 BTC"} // amount
        field4={"07 Oct 2019 14:02 UTC"} // time
        field5={
          "https://btc1.trezor.io/tx/8bab8a3286e7a1b2b93ed86588a98876e8de510c5e8ad3922abb2351b49b43f7"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"1 BTC"} // amount
        field9={"07 Oct 2019 15:57 UTC"} // time
        field10={
          "https://btc1.trezor.io/tx/396e16f8ec98dacfc56ee0b0c00aedc1a94af203050b428ae7eb08d17019846b"
        } // tx link
        TXTableRows={TXTableRows2}
      />
    </div>
  );
};
