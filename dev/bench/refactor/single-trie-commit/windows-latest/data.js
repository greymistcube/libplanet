window.BENCHMARK_DATA = {
  "lastUpdate": 1695371992078,
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
        "date": 1695371789625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316106,
            "unit": "ns",
            "range": "± 120067.9250687003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419741.26984127,
            "unit": "ns",
            "range": "± 110134.69705381537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1958944.5652173914,
            "unit": "ns",
            "range": "± 110501.27776510539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9017591.011235954,
            "unit": "ns",
            "range": "± 525874.0986638882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49063.82978723404,
            "unit": "ns",
            "range": "± 2936.5275032200357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7274107.142857143,
            "unit": "ns",
            "range": "± 79233.98129091326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21016320,
            "unit": "ns",
            "range": "± 516230.8430666782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51212106.666666664,
            "unit": "ns",
            "range": "± 727410.2649288154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103011966.66666667,
            "unit": "ns",
            "range": "± 1596215.5424926917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202706993.33333334,
            "unit": "ns",
            "range": "± 3055254.415982563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4490494.114583333,
            "unit": "ns",
            "range": "± 22804.43166789789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437503.125,
            "unit": "ns",
            "range": "± 6488.13411451301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058230.95703125,
            "unit": "ns",
            "range": "± 3975.2950223890402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652409.9609375,
            "unit": "ns",
            "range": "± 7699.616715898253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840024.4270833334,
            "unit": "ns",
            "range": "± 3009.5722006246606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767916.7410714285,
            "unit": "ns",
            "range": "± 2454.352510811598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3210664.705882353,
            "unit": "ns",
            "range": "± 62787.42849066673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414621.4285714286,
            "unit": "ns",
            "range": "± 45283.37152050117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4069196.296296296,
            "unit": "ns",
            "range": "± 111231.46511625581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3947955.9322033897,
            "unit": "ns",
            "range": "± 174074.65825109842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10489737.5,
            "unit": "ns",
            "range": "± 342079.6246246381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249226.31578947368,
            "unit": "ns",
            "range": "± 10147.422725496599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244336.76470588235,
            "unit": "ns",
            "range": "± 11654.451515318722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213536.17021276595,
            "unit": "ns",
            "range": "± 8280.816635109779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4026676.923076923,
            "unit": "ns",
            "range": "± 49949.79402436934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3738553.3333333335,
            "unit": "ns",
            "range": "± 67666.38611248431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20917.021276595744,
            "unit": "ns",
            "range": "± 1800.5607428769936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85217.0731707317,
            "unit": "ns",
            "range": "± 4325.171940578502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74571.875,
            "unit": "ns",
            "range": "± 4640.501404964089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86240.40404040404,
            "unit": "ns",
            "range": "± 16550.706990213497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5309.473684210527,
            "unit": "ns",
            "range": "± 792.5280965836981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21115.151515151516,
            "unit": "ns",
            "range": "± 2140.0154317755464"
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
        "date": 1695371799520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013600,
            "unit": "ns",
            "range": "± 98666.53357894382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1821306.6666666667,
            "unit": "ns",
            "range": "± 91463.93519547167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1470783.5051546392,
            "unit": "ns",
            "range": "± 100770.28815621155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5608877.777777778,
            "unit": "ns",
            "range": "± 154250.80060466295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36664.28571428572,
            "unit": "ns",
            "range": "± 1775.7860651182964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5230600,
            "unit": "ns",
            "range": "± 38865.90499947958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13795680,
            "unit": "ns",
            "range": "± 113908.17856000131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34526461.538461536,
            "unit": "ns",
            "range": "± 387827.3682504918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69846686.66666667,
            "unit": "ns",
            "range": "± 873644.51324541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139098860,
            "unit": "ns",
            "range": "± 2407210.4364655307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3289507.421875,
            "unit": "ns",
            "range": "± 15623.86326989545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1016709.1666666666,
            "unit": "ns",
            "range": "± 2110.0633196497483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735068.7639508928,
            "unit": "ns",
            "range": "± 1028.3432576868763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1858584.7786458333,
            "unit": "ns",
            "range": "± 2798.9087211233987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 586727.2536057692,
            "unit": "ns",
            "range": "± 1249.7061081700122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 521321.93359375,
            "unit": "ns",
            "range": "± 990.2641548930591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123568,
            "unit": "ns",
            "range": "± 84765.77437930033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310546.875,
            "unit": "ns",
            "range": "± 69370.51983499489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2865803.846153846,
            "unit": "ns",
            "range": "± 68889.04401002661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729550,
            "unit": "ns",
            "range": "± 112251.38979007752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6709927.777777778,
            "unit": "ns",
            "range": "± 222665.9658529034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189014.89361702127,
            "unit": "ns",
            "range": "± 7087.618681573746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181550,
            "unit": "ns",
            "range": "± 6245.076492098144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160079.51807228915,
            "unit": "ns",
            "range": "± 8499.838722087536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838585.714285714,
            "unit": "ns",
            "range": "± 40142.22517198371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2578621.4285714286,
            "unit": "ns",
            "range": "± 37087.96567354696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18958.333333333332,
            "unit": "ns",
            "range": "± 2028.308430125778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72742.55319148937,
            "unit": "ns",
            "range": "± 7778.924371586388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59464.13043478261,
            "unit": "ns",
            "range": "± 3713.8168370671333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66759.34065934065,
            "unit": "ns",
            "range": "± 10184.017740470474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4302.040816326531,
            "unit": "ns",
            "range": "± 519.1645929813707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16579.79797979798,
            "unit": "ns",
            "range": "± 2341.723584568958"
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
        "date": 1695371965220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292324,
            "unit": "ns",
            "range": "± 111457.9860328772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2491985.4166666665,
            "unit": "ns",
            "range": "± 97045.31292919212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1944114,
            "unit": "ns",
            "range": "± 125061.69953630524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8950784.269662922,
            "unit": "ns",
            "range": "± 663976.3688461423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48718.51851851852,
            "unit": "ns",
            "range": "± 2561.8407010932156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522883.333333333,
            "unit": "ns",
            "range": "± 98544.06314412036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20517135.714285713,
            "unit": "ns",
            "range": "± 243717.2308770425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51757046.666666664,
            "unit": "ns",
            "range": "± 597250.2477027134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106530521.42857143,
            "unit": "ns",
            "range": "± 1216646.7404484984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211544253.33333334,
            "unit": "ns",
            "range": "± 2828549.766441824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4571246.372767857,
            "unit": "ns",
            "range": "± 16834.632444307346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1426156.3755580357,
            "unit": "ns",
            "range": "± 3379.989331824703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076387.9036458333,
            "unit": "ns",
            "range": "± 2163.309904141397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646957.5334821427,
            "unit": "ns",
            "range": "± 8302.54136235707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831737.9361979166,
            "unit": "ns",
            "range": "± 2762.170949045196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778483.046875,
            "unit": "ns",
            "range": "± 2299.5853408060725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3442935.714285714,
            "unit": "ns",
            "range": "± 80304.03032049068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446374.358974359,
            "unit": "ns",
            "range": "± 118930.75100983126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286921.428571428,
            "unit": "ns",
            "range": "± 89006.30380148429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4124189.285714286,
            "unit": "ns",
            "range": "± 170776.09762341014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10273087.096774194,
            "unit": "ns",
            "range": "± 260565.53205407588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252064.2857142857,
            "unit": "ns",
            "range": "± 8324.598325578836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245919.51219512196,
            "unit": "ns",
            "range": "± 7818.638612706023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220506.25,
            "unit": "ns",
            "range": "± 6829.81780798892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224140,
            "unit": "ns",
            "range": "± 77738.46078817284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833247.619047619,
            "unit": "ns",
            "range": "± 89554.02067494021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23443.434343434343,
            "unit": "ns",
            "range": "± 3703.1195237772063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86816.29213483146,
            "unit": "ns",
            "range": "± 6468.699880266526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69676.71232876713,
            "unit": "ns",
            "range": "± 3412.9459638568846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81060.60606060606,
            "unit": "ns",
            "range": "± 13727.076016234232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4935.714285714285,
            "unit": "ns",
            "range": "± 872.5185727500673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18900.526315789473,
            "unit": "ns",
            "range": "± 1502.683676188402"
          }
        ]
      }
    ]
  }
}