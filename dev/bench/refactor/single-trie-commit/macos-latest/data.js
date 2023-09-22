window.BENCHMARK_DATA = {
  "lastUpdate": 1695372122694,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "00fb4dd87d26d008731bfbdbe97a00982680d720",
          "message": "Working",
          "timestamp": "2023-09-22T16:35:38+09:00",
          "tree_id": "208fc59fc38921dd618f815411eb39303f6b3279",
          "url": "https://github.com/greymistcube/libplanet/commit/00fb4dd87d26d008731bfbdbe97a00982680d720"
        },
        "date": 1695371771963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7825566.538461538,
            "unit": "ns",
            "range": "± 51708.95624166634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19728022.153846152,
            "unit": "ns",
            "range": "± 250399.61855064335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47670755.428571425,
            "unit": "ns",
            "range": "± 280230.37918187527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96289250.3076923,
            "unit": "ns",
            "range": "± 1238116.2043702647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197270190.5,
            "unit": "ns",
            "range": "± 1337723.2807051602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57213.67582417582,
            "unit": "ns",
            "range": "± 7405.97254712319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289230.84810126584,
            "unit": "ns",
            "range": "± 14270.367804801783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285833.2686567164,
            "unit": "ns",
            "range": "± 13508.821316124233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267532.83636363636,
            "unit": "ns",
            "range": "± 11318.839210154012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4038097.0434782607,
            "unit": "ns",
            "range": "± 97599.37966479381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3698681,
            "unit": "ns",
            "range": "± 72261.5945575518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17074.706521739132,
            "unit": "ns",
            "range": "± 1536.336305173565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83002.19791666667,
            "unit": "ns",
            "range": "± 9060.751978923967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94637.69696969698,
            "unit": "ns",
            "range": "± 14510.291750435134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90966.02083333333,
            "unit": "ns",
            "range": "± 13227.857317024604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6456.216494845361,
            "unit": "ns",
            "range": "± 1633.9036348752086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15608.797752808989,
            "unit": "ns",
            "range": "± 1677.3727236621567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503681.9141414142,
            "unit": "ns",
            "range": "± 159764.2784830974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2789337.5795454546,
            "unit": "ns",
            "range": "± 153384.93306371104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309869.836734694,
            "unit": "ns",
            "range": "± 177502.21483681008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11234125.93877551,
            "unit": "ns",
            "range": "± 440097.1108924621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194140.789473684,
            "unit": "ns",
            "range": "± 69209.93277668471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3310177.1428571427,
            "unit": "ns",
            "range": "± 141974.1786270151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333977.934782608,
            "unit": "ns",
            "range": "± 165712.809919974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4171693.4468085105,
            "unit": "ns",
            "range": "± 236545.93319626251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14930329.56521739,
            "unit": "ns",
            "range": "± 1300958.7261507013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5545307.104910715,
            "unit": "ns",
            "range": "± 130837.44901383741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1733861.67890625,
            "unit": "ns",
            "range": "± 21563.163405806154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 952036.7247395833,
            "unit": "ns",
            "range": "± 8044.9206684250685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2441364.625,
            "unit": "ns",
            "range": "± 48188.27124520754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826816.7903878348,
            "unit": "ns",
            "range": "± 5581.338390603559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698478.0924479166,
            "unit": "ns",
            "range": "± 12392.064292974856"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7d8a429dd1603b6613f5c079c27d5d4f1d16cc5b",
          "message": "Combined triple commit into one",
          "timestamp": "2023-09-22T17:21:17+09:00",
          "tree_id": "5df236a46c788887f276bf6c0ea4acca23c34348",
          "url": "https://github.com/greymistcube/libplanet/commit/7d8a429dd1603b6613f5c079c27d5d4f1d16cc5b"
        },
        "date": 1695371920800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8585029.871794872,
            "unit": "ns",
            "range": "± 299864.1512784695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21893574.25,
            "unit": "ns",
            "range": "± 941652.8131123149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53186898.145833336,
            "unit": "ns",
            "range": "± 1867764.2023482048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106045916.58064516,
            "unit": "ns",
            "range": "± 3163374.4480922353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234394721.07692307,
            "unit": "ns",
            "range": "± 5825047.053863959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70959.88202247191,
            "unit": "ns",
            "range": "± 9275.835857344631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289220.19101123593,
            "unit": "ns",
            "range": "± 17478.85900808356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292126.71276595746,
            "unit": "ns",
            "range": "± 21123.458073966747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283468.43055555556,
            "unit": "ns",
            "range": "± 13217.602389948468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119363.6363636362,
            "unit": "ns",
            "range": "± 95893.44261075638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3931649.1395348837,
            "unit": "ns",
            "range": "± 144559.01645094913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21962.18181818182,
            "unit": "ns",
            "range": "± 3842.7452091070304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97710.16,
            "unit": "ns",
            "range": "± 17407.15516080452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96839.20202020202,
            "unit": "ns",
            "range": "± 18651.92336965126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92530.14583333333,
            "unit": "ns",
            "range": "± 14786.128354842493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6188.456989247312,
            "unit": "ns",
            "range": "± 672.8232520987589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17436.468085106382,
            "unit": "ns",
            "range": "± 1571.6594456016805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487186.5252525252,
            "unit": "ns",
            "range": "± 138491.31764315633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953050.230769231,
            "unit": "ns",
            "range": "± 47595.47084571851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2406245.18556701,
            "unit": "ns",
            "range": "± 202614.52974060585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11078855.196202531,
            "unit": "ns",
            "range": "± 972054.4744232394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3134434.951219512,
            "unit": "ns",
            "range": "± 165015.97152074662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3425538.6506849313,
            "unit": "ns",
            "range": "± 157600.67564634775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4507061.31147541,
            "unit": "ns",
            "range": "± 199807.62392966403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137201,
            "unit": "ns",
            "range": "± 215866.07971440494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15529477.637362637,
            "unit": "ns",
            "range": "± 1997189.1836009624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5448944.880701014,
            "unit": "ns",
            "range": "± 170559.32190179906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1757446.378515625,
            "unit": "ns",
            "range": "± 23159.807023058227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 980427.19609375,
            "unit": "ns",
            "range": "± 10808.983942316523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2340575.696875,
            "unit": "ns",
            "range": "± 27315.13491296522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 754760.0241887019,
            "unit": "ns",
            "range": "± 4170.68553507772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719798.30546875,
            "unit": "ns",
            "range": "± 12627.406714423056"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "fde8c9524151e1a5467f2edf2ec72f80fc852502",
          "message": "Changelog",
          "timestamp": "2023-09-22T17:24:04+09:00",
          "tree_id": "78f01675d622d3342bb8561bfb371a960019f4fe",
          "url": "https://github.com/greymistcube/libplanet/commit/fde8c9524151e1a5467f2edf2ec72f80fc852502"
        },
        "date": 1695372107008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8403746.893939395,
            "unit": "ns",
            "range": "± 265902.15294527746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19785471.64285714,
            "unit": "ns",
            "range": "± 242814.89519443762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48731378.43333333,
            "unit": "ns",
            "range": "± 815720.0456527846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101886633.07692307,
            "unit": "ns",
            "range": "± 1451203.4199491963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201619292.66666666,
            "unit": "ns",
            "range": "± 2494982.0004984476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73385.43406593407,
            "unit": "ns",
            "range": "± 9547.342978607185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333849.1612903226,
            "unit": "ns",
            "range": "± 33674.33623867005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327157.09139784944,
            "unit": "ns",
            "range": "± 44335.93683684596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272512.6,
            "unit": "ns",
            "range": "± 21633.834094434857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4064042.8333333335,
            "unit": "ns",
            "range": "± 81921.65619179023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657641.8235294116,
            "unit": "ns",
            "range": "± 74418.2223948168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18664.153846153848,
            "unit": "ns",
            "range": "± 2223.4998634439003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104225.84210526316,
            "unit": "ns",
            "range": "± 14419.802631897885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121209.82608695653,
            "unit": "ns",
            "range": "± 20367.359468440547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106534.74736842106,
            "unit": "ns",
            "range": "± 17108.394524057992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6543.634408602151,
            "unit": "ns",
            "range": "± 979.5395078805301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18091.145161290322,
            "unit": "ns",
            "range": "± 2354.7749806886895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403382.494736842,
            "unit": "ns",
            "range": "± 151001.06919030187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2833398.9725274723,
            "unit": "ns",
            "range": "± 169613.96647513966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2390098.26,
            "unit": "ns",
            "range": "± 229784.8025753187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12359728.569892474,
            "unit": "ns",
            "range": "± 2888520.7497131843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3390191.4375,
            "unit": "ns",
            "range": "± 64563.25729955984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3731809.6818181816,
            "unit": "ns",
            "range": "± 88114.84340100944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4395378.82,
            "unit": "ns",
            "range": "± 114542.98062034763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4589555.595744681,
            "unit": "ns",
            "range": "± 434810.5875955278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16197683.903225806,
            "unit": "ns",
            "range": "± 1742647.5210113868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5558689.938265932,
            "unit": "ns",
            "range": "± 225622.57452147908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1712697.5638950893,
            "unit": "ns",
            "range": "± 67580.62523052748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062779.9092447916,
            "unit": "ns",
            "range": "± 12467.701740141318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634064.642020089,
            "unit": "ns",
            "range": "± 34377.814860600105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857760.2238932292,
            "unit": "ns",
            "range": "± 13252.997456240644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733526.301156851,
            "unit": "ns",
            "range": "± 9159.362399017155"
          }
        ]
      }
    ]
  }
}