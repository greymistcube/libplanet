window.BENCHMARK_DATA = {
  "lastUpdate": 1683805613350,
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
      }
    ]
  }
}