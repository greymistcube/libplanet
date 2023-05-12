window.BENCHMARK_DATA = {
  "lastUpdate": 1683891518883,
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
          "id": "9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d",
          "message": "Removed native tokens",
          "timestamp": "2023-05-11T20:19:50+09:00",
          "tree_id": "c1b1950a53da0ae0c46c99136417be98728f0f19",
          "url": "https://github.com/greymistcube/libplanet/commit/9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d"
        },
        "date": 1683805069447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380426,
            "unit": "ns",
            "range": "± 119180.67145508472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534321.276595745,
            "unit": "ns",
            "range": "± 98508.19417730691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2182075.5555555555,
            "unit": "ns",
            "range": "± 120452.89844611425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5147600,
            "unit": "ns",
            "range": "± 153039.60271772795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49021.27659574468,
            "unit": "ns",
            "range": "± 2930.1132988636346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7373270.731707317,
            "unit": "ns",
            "range": "± 260746.19100180775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19859433.333333332,
            "unit": "ns",
            "range": "± 267344.76047302847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51271020,
            "unit": "ns",
            "range": "± 660172.7232864356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99358643.33333333,
            "unit": "ns",
            "range": "± 934021.1296682033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201964146.66666666,
            "unit": "ns",
            "range": "± 2395038.0470782467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878667.522321428,
            "unit": "ns",
            "range": "± 27901.673167072116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530746.7643229167,
            "unit": "ns",
            "range": "± 7079.439369456879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186039.927455357,
            "unit": "ns",
            "range": "± 6549.670093945841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625079.4921875,
            "unit": "ns",
            "range": "± 13259.880834243835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838414.7739955357,
            "unit": "ns",
            "range": "± 4779.308551375649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778382.7497209822,
            "unit": "ns",
            "range": "± 3042.0188869095714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260360,
            "unit": "ns",
            "range": "± 42454.67835569732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419143.3333333335,
            "unit": "ns",
            "range": "± 83598.22091545898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4210472.222222222,
            "unit": "ns",
            "range": "± 68501.81238955357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4327119.047619048,
            "unit": "ns",
            "range": "± 78293.91176233067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6703126.923076923,
            "unit": "ns",
            "range": "± 155005.4594075765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269164.70588235295,
            "unit": "ns",
            "range": "± 5485.656430235878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261553.57142857142,
            "unit": "ns",
            "range": "± 11248.740766466655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236355.6603773585,
            "unit": "ns",
            "range": "± 9879.318239759177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104071.4285714286,
            "unit": "ns",
            "range": "± 49926.78375645417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737207.1428571427,
            "unit": "ns",
            "range": "± 32294.49737090764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21361.052631578947,
            "unit": "ns",
            "range": "± 1790.47686129072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91511.45833333333,
            "unit": "ns",
            "range": "± 5680.80553575703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79690,
            "unit": "ns",
            "range": "± 3893.6272720091397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99091.66666666667,
            "unit": "ns",
            "range": "± 14160.75872682316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6038.144329896907,
            "unit": "ns",
            "range": "± 1056.5710359232312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20311.57894736842,
            "unit": "ns",
            "range": "± 1995.5196176016218"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99b93f904780aadf51b47bc2ff8fdc4c306ebc38",
          "message": "Merge pull request #3151 from moreal/exp/nullable-total-supply-trackable\n\nMake `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T19:27:57+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/greymistcube/libplanet/commit/99b93f904780aadf51b47bc2ff8fdc4c306ebc38"
        },
        "date": 1683805112876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429136.7346938776,
            "unit": "ns",
            "range": "± 103005.61128520216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2672397.97979798,
            "unit": "ns",
            "range": "± 158531.50590095358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265328.125,
            "unit": "ns",
            "range": "± 139014.6654157679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5499966.666666667,
            "unit": "ns",
            "range": "± 323275.0954635058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49381.05263157895,
            "unit": "ns",
            "range": "± 3381.183688517724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6842200,
            "unit": "ns",
            "range": "± 136469.69443799602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19447035.29411765,
            "unit": "ns",
            "range": "± 392638.15075266256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49892085.71428572,
            "unit": "ns",
            "range": "± 534596.6730696543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100699346.66666667,
            "unit": "ns",
            "range": "± 1501723.875544686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194353527.27272728,
            "unit": "ns",
            "range": "± 4707509.662654203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814564.010416667,
            "unit": "ns",
            "range": "± 35244.23746574672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520390.9895833333,
            "unit": "ns",
            "range": "± 11503.70185549256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181372.421875,
            "unit": "ns",
            "range": "± 5296.445822489691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617347.823660714,
            "unit": "ns",
            "range": "± 6781.972856090016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822464.9283854166,
            "unit": "ns",
            "range": "± 3292.580770245348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769974.6223958334,
            "unit": "ns",
            "range": "± 3606.637463433364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3091511.111111111,
            "unit": "ns",
            "range": "± 65581.71498115371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3221739.1304347827,
            "unit": "ns",
            "range": "± 80156.92982649402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4033125,
            "unit": "ns",
            "range": "± 92274.32713040189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4059426.3157894737,
            "unit": "ns",
            "range": "± 175987.00086564408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705774,
            "unit": "ns",
            "range": "± 265942.19473949063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270697.0588235294,
            "unit": "ns",
            "range": "± 12081.958556610445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256247.27272727274,
            "unit": "ns",
            "range": "± 10629.760015155467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231507.14285714287,
            "unit": "ns",
            "range": "± 14738.694776381664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3943211.7647058824,
            "unit": "ns",
            "range": "± 77762.73916819788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528488.4615384615,
            "unit": "ns",
            "range": "± 95740.17475197371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21841.666666666668,
            "unit": "ns",
            "range": "± 2459.5107201344213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93944.62365591398,
            "unit": "ns",
            "range": "± 5619.383487602413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73970.83333333333,
            "unit": "ns",
            "range": "± 5596.613951247508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101405.10204081633,
            "unit": "ns",
            "range": "± 20080.366224783826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5333.684210526316,
            "unit": "ns",
            "range": "± 958.3463734770173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21355.670103092783,
            "unit": "ns",
            "range": "± 2215.803516417396"
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
          "id": "b01676e3932bfdec4b224df6e42154b96597b0ab",
          "message": "Changelog",
          "timestamp": "2023-05-11T20:29:50+09:00",
          "tree_id": "548ae5e5404d9f992d8459029eb35ddd7d744401",
          "url": "https://github.com/greymistcube/libplanet/commit/b01676e3932bfdec4b224df6e42154b96597b0ab"
        },
        "date": 1683805589338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1246959.5959595959,
            "unit": "ns",
            "range": "± 79797.16367420167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2440342.3076923075,
            "unit": "ns",
            "range": "± 125485.48891036338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037580,
            "unit": "ns",
            "range": "± 149244.87876769452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5203899,
            "unit": "ns",
            "range": "± 359682.14236231335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45317.24137931035,
            "unit": "ns",
            "range": "± 2497.7760757881138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6694171.428571428,
            "unit": "ns",
            "range": "± 26298.330703719537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19420533.333333332,
            "unit": "ns",
            "range": "± 155091.8606442493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45370983.333333336,
            "unit": "ns",
            "range": "± 676836.3176960741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90633846.66666667,
            "unit": "ns",
            "range": "± 1010960.4421162133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179153833.33333334,
            "unit": "ns",
            "range": "± 2208419.1966416244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4621193.072916667,
            "unit": "ns",
            "range": "± 14954.117174020474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1488687.4581473214,
            "unit": "ns",
            "range": "± 7080.428252772759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126201.185825893,
            "unit": "ns",
            "range": "± 4896.863736431067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615857.0052083335,
            "unit": "ns",
            "range": "± 8092.6361700774205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852850.5440848215,
            "unit": "ns",
            "range": "± 8464.286068693316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753011.9791666666,
            "unit": "ns",
            "range": "± 5492.759934621745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912490.909090909,
            "unit": "ns",
            "range": "± 71777.74012375096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3045075,
            "unit": "ns",
            "range": "± 65877.86624405472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3823433.3333333335,
            "unit": "ns",
            "range": "± 31495.723615446685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3887261.4583333335,
            "unit": "ns",
            "range": "± 224114.00593626057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6264557.142857143,
            "unit": "ns",
            "range": "± 225291.97656337597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256947.22222222222,
            "unit": "ns",
            "range": "± 8415.274755250075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235635.1851851852,
            "unit": "ns",
            "range": "± 9542.85581651901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208292.3076923077,
            "unit": "ns",
            "range": "± 2985.0911595408993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3709192.8571428573,
            "unit": "ns",
            "range": "± 41430.39509059306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3386018.75,
            "unit": "ns",
            "range": "± 54914.94294209303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18041.052631578947,
            "unit": "ns",
            "range": "± 1557.3774147887418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77467.04545454546,
            "unit": "ns",
            "range": "± 4977.436943512772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68527.77777777778,
            "unit": "ns",
            "range": "± 1059.3036311683898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86542.42424242424,
            "unit": "ns",
            "range": "± 15122.992974674667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4495.744680851064,
            "unit": "ns",
            "range": "± 511.5683020473164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15667.708333333334,
            "unit": "ns",
            "range": "± 1609.6089614474472"
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
          "id": "1ac0f633c2e43bfa033075362ce90c4fd9430f5d",
          "message": "Changelog",
          "timestamp": "2023-05-12T16:14:14+09:00",
          "tree_id": "177cd79e9cdac40aab6dfab289d5281d43c4fd5a",
          "url": "https://github.com/greymistcube/libplanet/commit/1ac0f633c2e43bfa033075362ce90c4fd9430f5d"
        },
        "date": 1683876533478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287560.824742268,
            "unit": "ns",
            "range": "± 106260.73725815216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419041.891891892,
            "unit": "ns",
            "range": "± 121362.03509951125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2081515.1515151516,
            "unit": "ns",
            "range": "± 146257.79404568314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5121485.869565218,
            "unit": "ns",
            "range": "± 287232.22697970207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44384.93975903615,
            "unit": "ns",
            "range": "± 2337.0000435695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6609153.333333333,
            "unit": "ns",
            "range": "± 19888.613636474325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17615033.333333332,
            "unit": "ns",
            "range": "± 195963.72356224747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43875478.94736842,
            "unit": "ns",
            "range": "± 957095.3589892861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 86778241.66666667,
            "unit": "ns",
            "range": "± 429314.414255891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174183392.85714287,
            "unit": "ns",
            "range": "± 1520983.2454770757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4787254.927884615,
            "unit": "ns",
            "range": "± 11685.050688166633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518850.2669270833,
            "unit": "ns",
            "range": "± 7777.917204051361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148255.6119791667,
            "unit": "ns",
            "range": "± 4753.423767913603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610933.565848214,
            "unit": "ns",
            "range": "± 7256.988273042669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815047.6353236607,
            "unit": "ns",
            "range": "± 4377.1670848017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748918.06640625,
            "unit": "ns",
            "range": "± 969.7143199171453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888250,
            "unit": "ns",
            "range": "± 95076.52256397024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3049753.3333333335,
            "unit": "ns",
            "range": "± 37512.243080791384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891920,
            "unit": "ns",
            "range": "± 55299.16300064069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853852.1739130435,
            "unit": "ns",
            "range": "± 94081.7095042448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6226500,
            "unit": "ns",
            "range": "± 136964.99688011667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258590,
            "unit": "ns",
            "range": "± 11456.693698815316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240405.88235294117,
            "unit": "ns",
            "range": "± 11467.590702639593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203490,
            "unit": "ns",
            "range": "± 4613.755177954858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3882123.529411765,
            "unit": "ns",
            "range": "± 74909.46643625695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3462042.8571428573,
            "unit": "ns",
            "range": "± 43586.80930115148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15532.967032967033,
            "unit": "ns",
            "range": "± 2103.703345428667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79579.16666666667,
            "unit": "ns",
            "range": "± 7775.23621799454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63058.333333333336,
            "unit": "ns",
            "range": "± 1640.232397814584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87526.5306122449,
            "unit": "ns",
            "range": "± 14750.093838739826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4005.2631578947367,
            "unit": "ns",
            "range": "± 815.5886036702144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15405.376344086022,
            "unit": "ns",
            "range": "± 1787.72174613619"
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
          "id": "7e3de8be1d421a43fc8c5e10653cddb010575ab8",
          "message": "[skip changelog] Remove remaining native tokens related API",
          "timestamp": "2023-05-12T20:18:18+09:00",
          "tree_id": "bed97323e9fdde44e5164e36835e6bcc173687b6",
          "url": "https://github.com/greymistcube/libplanet/commit/7e3de8be1d421a43fc8c5e10653cddb010575ab8"
        },
        "date": 1683891491270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1752858.9473684211,
            "unit": "ns",
            "range": "± 202653.21259074152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3276948.4536082475,
            "unit": "ns",
            "range": "± 223860.16660025093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2758755.6701030927,
            "unit": "ns",
            "range": "± 222175.83547397025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6924400,
            "unit": "ns",
            "range": "± 514521.41087120754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62269.565217391304,
            "unit": "ns",
            "range": "± 11300.828902112482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9129373.529411765,
            "unit": "ns",
            "range": "± 432372.4957831446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24133030.681818184,
            "unit": "ns",
            "range": "± 1324825.8675737854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64597217.64705882,
            "unit": "ns",
            "range": "± 1940674.650494792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127777989.65517241,
            "unit": "ns",
            "range": "± 3683499.54491502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261236790,
            "unit": "ns",
            "range": "± 5767571.446220945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6096101.666666667,
            "unit": "ns",
            "range": "± 70891.06033531656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972012.734375,
            "unit": "ns",
            "range": "± 23972.94250815495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1489789.6484375,
            "unit": "ns",
            "range": "± 19034.246276181148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3313456.8810096155,
            "unit": "ns",
            "range": "± 18381.393168520615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1091846.9308035714,
            "unit": "ns",
            "range": "± 17296.47577693948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1001775.7747395834,
            "unit": "ns",
            "range": "± 10146.944526741747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3769681.443298969,
            "unit": "ns",
            "range": "± 236108.855690326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3991290.3225806453,
            "unit": "ns",
            "range": "± 262916.3509991741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5377544.827586207,
            "unit": "ns",
            "range": "± 233777.79085938114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5248102.2727272725,
            "unit": "ns",
            "range": "± 286343.78661445813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8381130,
            "unit": "ns",
            "range": "± 178855.74340056407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332403.26086956525,
            "unit": "ns",
            "range": "± 28025.841494015534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316604.25531914894,
            "unit": "ns",
            "range": "± 31993.3021044564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277734.0206185567,
            "unit": "ns",
            "range": "± 30718.543824665645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5074246.774193549,
            "unit": "ns",
            "range": "± 226592.30140275587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4473207.692307692,
            "unit": "ns",
            "range": "± 156357.4504387057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20079.518072289156,
            "unit": "ns",
            "range": "± 2769.774096456445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99315.78947368421,
            "unit": "ns",
            "range": "± 10736.488944195125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114578.28282828283,
            "unit": "ns",
            "range": "± 20388.992830787054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134378.65168539327,
            "unit": "ns",
            "range": "± 20220.72222380542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7479.787234042553,
            "unit": "ns",
            "range": "± 1688.3267651944147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23302.15053763441,
            "unit": "ns",
            "range": "± 4799.410708723013"
          }
        ]
      }
    ]
  }
}