window.BENCHMARK_DATA = {
  "lastUpdate": 1708356970931,
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
          "id": "8119060772bfbcabc90d5894cc8190757b2ccb88",
          "message": "Remove clutter",
          "timestamp": "2024-02-19T20:50:19+09:00",
          "tree_id": "20b1db2437046912a63df1dbe166807fc824a10f",
          "url": "https://github.com/greymistcube/libplanet/commit/8119060772bfbcabc90d5894cc8190757b2ccb88"
        },
        "date": 1708351727651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5528108.5,
            "unit": "ns",
            "range": "± 36492.247450130264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14756010.266666668,
            "unit": "ns",
            "range": "± 233866.26376062105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37164118.9,
            "unit": "ns",
            "range": "± 127287.39821129193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75187939.53333333,
            "unit": "ns",
            "range": "± 501586.42846926436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150423851,
            "unit": "ns",
            "range": "± 596388.4495809241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203127.0357142857,
            "unit": "ns",
            "range": "± 8688.670208881294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195637.03246753247,
            "unit": "ns",
            "range": "± 9973.456962284305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168979.91666666666,
            "unit": "ns",
            "range": "± 1885.4120580891272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3344307.1666666665,
            "unit": "ns",
            "range": "± 57085.139340495705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865436.653846154,
            "unit": "ns",
            "range": "± 19460.809793214987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12803.133333333333,
            "unit": "ns",
            "range": "± 947.5313780342846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65562.31443298969,
            "unit": "ns",
            "range": "± 7945.875796508495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57027.051020408166,
            "unit": "ns",
            "range": "± 6120.3520557260335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65035.59375,
            "unit": "ns",
            "range": "± 9960.353212483693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3601.3977272727275,
            "unit": "ns",
            "range": "± 300.4219461722159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14796.565217391304,
            "unit": "ns",
            "range": "± 2017.6109705954182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38918.221052631576,
            "unit": "ns",
            "range": "± 4190.581491613061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981813.9468085107,
            "unit": "ns",
            "range": "± 93986.25772944887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844338.6666666667,
            "unit": "ns",
            "range": "± 34231.35029611362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619605.65625,
            "unit": "ns",
            "range": "± 187795.68386141182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12791181.375,
            "unit": "ns",
            "range": "± 1196375.7187118034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758934.096153846,
            "unit": "ns",
            "range": "± 32047.21251213218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212756.8941127232,
            "unit": "ns",
            "range": "± 2455.6799021234824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764549.5377854567,
            "unit": "ns",
            "range": "± 924.6115997768495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961702.099609375,
            "unit": "ns",
            "range": "± 4754.079759429631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622784.3262532552,
            "unit": "ns",
            "range": "± 596.311984091943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574689.1560407366,
            "unit": "ns",
            "range": "± 1332.6624896917162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417421.966666667,
            "unit": "ns",
            "range": "± 72145.0757128963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535714.3333333335,
            "unit": "ns",
            "range": "± 94619.68552267064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130557.411764706,
            "unit": "ns",
            "range": "± 49792.7690383589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3199449.896551724,
            "unit": "ns",
            "range": "± 136873.417009632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14019505.215053763,
            "unit": "ns",
            "range": "± 793558.3340854776"
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
          "id": "78fbe3fda20683193ef2dced22c81d4c39117831",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-19T23:28:50+09:00",
          "tree_id": "794c843bea0f3e5257fa40280443f9ed020c53bd",
          "url": "https://github.com/greymistcube/libplanet/commit/78fbe3fda20683193ef2dced22c81d4c39117831"
        },
        "date": 1708353608389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5678627.566666666,
            "unit": "ns",
            "range": "± 92473.20976173638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14755390.642857144,
            "unit": "ns",
            "range": "± 257265.22594175575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37330269.071428575,
            "unit": "ns",
            "range": "± 280121.6960768918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76219808.61538461,
            "unit": "ns",
            "range": "± 532429.0767046722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151689810.07692307,
            "unit": "ns",
            "range": "± 1173592.8611597992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194530.3918918919,
            "unit": "ns",
            "range": "± 5670.0495774032015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193151.0185185185,
            "unit": "ns",
            "range": "± 8076.874751682581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166281.14814814815,
            "unit": "ns",
            "range": "± 4605.265211637183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214994.2666666666,
            "unit": "ns",
            "range": "± 35209.39866704965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2742330.4,
            "unit": "ns",
            "range": "± 37737.62024407096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16785.59574468085,
            "unit": "ns",
            "range": "± 1330.748718588415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65087.67171717172,
            "unit": "ns",
            "range": "± 7800.863167886607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56101.02808988764,
            "unit": "ns",
            "range": "± 6339.934571088197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64421.72448979592,
            "unit": "ns",
            "range": "± 14469.597395193196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3708.9690721649486,
            "unit": "ns",
            "range": "± 960.9356058638052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14976.767676767677,
            "unit": "ns",
            "range": "± 2653.7395325652533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39741.42268041237,
            "unit": "ns",
            "range": "± 5617.077945195073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012109.5434782609,
            "unit": "ns",
            "range": "± 107928.77007325507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907549.6395348837,
            "unit": "ns",
            "range": "± 110276.97990081615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627399.081632653,
            "unit": "ns",
            "range": "± 174898.63678765149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12827526.994505495,
            "unit": "ns",
            "range": "± 1023982.8933579177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3805671.0575520834,
            "unit": "ns",
            "range": "± 60780.837533020545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184643.8794642857,
            "unit": "ns",
            "range": "± 3022.8169163711073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776650.5314778646,
            "unit": "ns",
            "range": "± 12992.889703758428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971299.6680989584,
            "unit": "ns",
            "range": "± 18745.285386483025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628735.6864583333,
            "unit": "ns",
            "range": "± 9279.24754298538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592767.1555989584,
            "unit": "ns",
            "range": "± 2240.791830187062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453140.75,
            "unit": "ns",
            "range": "± 85745.67922604554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2712985.64,
            "unit": "ns",
            "range": "± 71104.7409383275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215675.5263157897,
            "unit": "ns",
            "range": "± 68957.459512988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3321234.103448276,
            "unit": "ns",
            "range": "± 142360.65396653174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13881859.43956044,
            "unit": "ns",
            "range": "± 911158.845435638"
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
          "id": "7aa8853a05ca98a88391517b3fc1d0409ea3c9cc",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T00:25:14+09:00",
          "tree_id": "9a15a671f07b8f532de30902b1889237f2953701",
          "url": "https://github.com/greymistcube/libplanet/commit/7aa8853a05ca98a88391517b3fc1d0409ea3c9cc"
        },
        "date": 1708356963280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5799400.966666667,
            "unit": "ns",
            "range": "± 18706.097061297063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14526937.583333334,
            "unit": "ns",
            "range": "± 84795.62706076763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37267866.96666667,
            "unit": "ns",
            "range": "± 301325.4053349413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74888596.61538461,
            "unit": "ns",
            "range": "± 380475.7587910033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152079172.53846154,
            "unit": "ns",
            "range": "± 815326.9572732376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203161.71875,
            "unit": "ns",
            "range": "± 8735.298801857787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194611.71186440677,
            "unit": "ns",
            "range": "± 7935.8095822601035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169265.42857142858,
            "unit": "ns",
            "range": "± 2927.167565419506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3279498.846153846,
            "unit": "ns",
            "range": "± 40603.59242079891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879012.7333333334,
            "unit": "ns",
            "range": "± 32141.791394797314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13975.305263157894,
            "unit": "ns",
            "range": "± 1908.9607681494417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69637.85106382979,
            "unit": "ns",
            "range": "± 7139.330291409522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55207.234042553195,
            "unit": "ns",
            "range": "± 5686.162578047689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67154.35051546391,
            "unit": "ns",
            "range": "± 12434.945619638196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3300.6629213483147,
            "unit": "ns",
            "range": "± 599.1413921722451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15845.729166666666,
            "unit": "ns",
            "range": "± 2831.9000966588023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40748.489795918365,
            "unit": "ns",
            "range": "± 6464.99712766522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976902.6210526315,
            "unit": "ns",
            "range": "± 64594.37259581023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916619.2647058824,
            "unit": "ns",
            "range": "± 90707.54932578698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1685862.3076923077,
            "unit": "ns",
            "range": "± 164763.3636159374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7739476.706896552,
            "unit": "ns",
            "range": "± 224142.89414828646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3779161.25546875,
            "unit": "ns",
            "range": "± 64091.674140597635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224393.1416015625,
            "unit": "ns",
            "range": "± 3976.40038593749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778414.6796061198,
            "unit": "ns",
            "range": "± 2224.110243275078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939463.2623197115,
            "unit": "ns",
            "range": "± 4670.0001077824445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620114.7331194197,
            "unit": "ns",
            "range": "± 1243.0681456848638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590524.9943659856,
            "unit": "ns",
            "range": "± 2247.2267379559767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2451673.5379746836,
            "unit": "ns",
            "range": "± 127368.52353736492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576598.2407407407,
            "unit": "ns",
            "range": "± 68815.99911167381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111857.285714286,
            "unit": "ns",
            "range": "± 53501.72603028598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3283607.9444444445,
            "unit": "ns",
            "range": "± 137225.88117728976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8957271.11764706,
            "unit": "ns",
            "range": "± 185781.59989732565"
          }
        ]
      }
    ]
  }
}