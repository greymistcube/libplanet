window.BENCHMARK_DATA = {
  "lastUpdate": 1683891080675,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
        "date": 1683804769335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4087640.3928571427,
            "unit": "ns",
            "range": "± 115127.06770390361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4321740.2727272725,
            "unit": "ns",
            "range": "± 103989.21153987072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5271873.368421053,
            "unit": "ns",
            "range": "± 117035.23433954528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5369649.923076923,
            "unit": "ns",
            "range": "± 142191.3783284832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8401965.47368421,
            "unit": "ns",
            "range": "± 274031.23072071566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334513.17142857146,
            "unit": "ns",
            "range": "± 9246.101796991861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317806.26666666666,
            "unit": "ns",
            "range": "± 12001.894671259202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291220.5135135135,
            "unit": "ns",
            "range": "± 9761.410541348865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5159623.8,
            "unit": "ns",
            "range": "± 114741.53952326255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4582243.384615385,
            "unit": "ns",
            "range": "± 66345.3872844456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21264.483870967742,
            "unit": "ns",
            "range": "± 1321.959782103032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101159.82558139534,
            "unit": "ns",
            "range": "± 5346.415921392047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85386.64705882352,
            "unit": "ns",
            "range": "± 3267.8553017141344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111526.23711340207,
            "unit": "ns",
            "range": "± 13882.303585090202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6487.602150537635,
            "unit": "ns",
            "range": "± 618.7149399778921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21532.91304347826,
            "unit": "ns",
            "range": "± 1428.4531682536647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7196011.596354167,
            "unit": "ns",
            "range": "± 22484.291582508937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2217480.3033854165,
            "unit": "ns",
            "range": "± 2199.9014925389797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1604168.453125,
            "unit": "ns",
            "range": "± 3510.9300868901096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115839.93828125,
            "unit": "ns",
            "range": "± 3191.8608803625784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996291.1516927084,
            "unit": "ns",
            "range": "± 480.7405422659454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904544.4171875,
            "unit": "ns",
            "range": "± 481.89981815099594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9739544.07142857,
            "unit": "ns",
            "range": "± 88294.63319125983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25762305.466666665,
            "unit": "ns",
            "range": "± 258113.98136810653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64249769.4,
            "unit": "ns",
            "range": "± 605729.7682126671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127716487.86666666,
            "unit": "ns",
            "range": "± 1090809.7903389984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258819119.8,
            "unit": "ns",
            "range": "± 2872230.6533656823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666275.9795918367,
            "unit": "ns",
            "range": "± 116103.37190340248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3158223.153846154,
            "unit": "ns",
            "range": "± 44857.0861363177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658890.1142857145,
            "unit": "ns",
            "range": "± 105722.93485833249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6344326.076923077,
            "unit": "ns",
            "range": "± 96420.02307047149"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54141.101265822785,
            "unit": "ns",
            "range": "± 2786.8683076121015"
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
          "id": "9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d",
          "message": "Removed native tokens",
          "timestamp": "2023-05-11T20:19:50+09:00",
          "tree_id": "c1b1950a53da0ae0c46c99136417be98728f0f19",
          "url": "https://github.com/greymistcube/libplanet/commit/9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d"
        },
        "date": 1683805149165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795426.3804347827,
            "unit": "ns",
            "range": "± 311184.5914955981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3857171.804347826,
            "unit": "ns",
            "range": "± 317989.81286641624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5090216.114583333,
            "unit": "ns",
            "range": "± 342323.2390023044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5038731.65625,
            "unit": "ns",
            "range": "± 491545.4780640089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8957091.206185566,
            "unit": "ns",
            "range": "± 749002.746986826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359202.13402061857,
            "unit": "ns",
            "range": "± 56281.598804884125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345356.10752688174,
            "unit": "ns",
            "range": "± 45240.40171597833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307085.95789473684,
            "unit": "ns",
            "range": "± 46043.135554842615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5230079.979591837,
            "unit": "ns",
            "range": "± 519931.99118441367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4857125.215053763,
            "unit": "ns",
            "range": "± 397094.788816957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23371.372340425532,
            "unit": "ns",
            "range": "± 7618.437575804571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117742.69473684211,
            "unit": "ns",
            "range": "± 17042.774998217446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113237.72043010753,
            "unit": "ns",
            "range": "± 23204.63750424901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136122.52631578947,
            "unit": "ns",
            "range": "± 35543.19404487355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7103.304347826087,
            "unit": "ns",
            "range": "± 1543.3302064479703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25458.1,
            "unit": "ns",
            "range": "± 11625.860258818519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7269166.017795139,
            "unit": "ns",
            "range": "± 143428.01805611633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2415679.3579282407,
            "unit": "ns",
            "range": "± 65234.333796609586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1756955.3165409483,
            "unit": "ns",
            "range": "± 51292.54908555241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3313123.6553485575,
            "unit": "ns",
            "range": "± 90414.42381479483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054521.5916748047,
            "unit": "ns",
            "range": "± 19109.393281631023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942582.8658203125,
            "unit": "ns",
            "range": "± 10910.914785985457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8978395.551020408,
            "unit": "ns",
            "range": "± 685374.292879613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24373306.463917527,
            "unit": "ns",
            "range": "± 1880522.9495694926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65510850.03278688,
            "unit": "ns",
            "range": "± 2950407.5995681225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131856734.97802198,
            "unit": "ns",
            "range": "± 7305903.920112953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258045370.19047618,
            "unit": "ns",
            "range": "± 5743102.942545255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651147.0210526315,
            "unit": "ns",
            "range": "± 196273.05224458044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3271614.597938144,
            "unit": "ns",
            "range": "± 334568.80182817846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2674145.4210526315,
            "unit": "ns",
            "range": "± 294272.4280724783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7061638.957894737,
            "unit": "ns",
            "range": "± 626698.3699353763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66871.71578947369,
            "unit": "ns",
            "range": "± 17192.313230827192"
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
        "date": 1683805587848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3820752.35,
            "unit": "ns",
            "range": "± 133647.69105175033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4116595.933333333,
            "unit": "ns",
            "range": "± 155953.50036664485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5109639.142857143,
            "unit": "ns",
            "range": "± 200736.09755244156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5197990.849462366,
            "unit": "ns",
            "range": "± 294745.30094306945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8727578.6375,
            "unit": "ns",
            "range": "± 430834.83524141804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337524.45454545453,
            "unit": "ns",
            "range": "± 15701.79399077288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327206.67741935485,
            "unit": "ns",
            "range": "± 8717.841140967172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288501.875,
            "unit": "ns",
            "range": "± 12323.020296933555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5080558.159090909,
            "unit": "ns",
            "range": "± 187439.43420456542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4461027.483870967,
            "unit": "ns",
            "range": "± 135344.9663457224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18275.542553191488,
            "unit": "ns",
            "range": "± 1372.8996600860457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92575.14705882352,
            "unit": "ns",
            "range": "± 4392.253031698974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98265.28260869565,
            "unit": "ns",
            "range": "± 5854.24924912691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106154.8817204301,
            "unit": "ns",
            "range": "± 12616.633468706455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5846.3917525773195,
            "unit": "ns",
            "range": "± 751.3961804076938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17704.287234042553,
            "unit": "ns",
            "range": "± 1165.0593009259176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7566108.433035715,
            "unit": "ns",
            "range": "± 77155.12834938253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2315291.13828125,
            "unit": "ns",
            "range": "± 42911.18758759088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1644047.79765625,
            "unit": "ns",
            "range": "± 30219.9418600106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106205.5692708334,
            "unit": "ns",
            "range": "± 29182.480443346547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004394.2506009615,
            "unit": "ns",
            "range": "± 9343.503950695835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943853.1455729167,
            "unit": "ns",
            "range": "± 8295.55638271435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9236406.333333334,
            "unit": "ns",
            "range": "± 202256.0505899226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24919496.310344826,
            "unit": "ns",
            "range": "± 1089002.4075997777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62718843.71666667,
            "unit": "ns",
            "range": "± 2731889.5598441986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125280975.23529412,
            "unit": "ns",
            "range": "± 2451435.9627297916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251494296.8,
            "unit": "ns",
            "range": "± 5760439.940018412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640375.5157894737,
            "unit": "ns",
            "range": "± 137285.74301030207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3069910.0212765955,
            "unit": "ns",
            "range": "± 108234.7340087013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2575900.988764045,
            "unit": "ns",
            "range": "± 143860.92931041663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6981452.350515464,
            "unit": "ns",
            "range": "± 456797.00975349004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53610.913043478264,
            "unit": "ns",
            "range": "± 4199.967358984031"
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
        "date": 1683876433286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3420075.875,
            "unit": "ns",
            "range": "± 66577.82524121676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403467.5,
            "unit": "ns",
            "range": "± 127031.39105932866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4265809.8,
            "unit": "ns",
            "range": "± 65833.28047011742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4219107.933333334,
            "unit": "ns",
            "range": "± 160494.35788120402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751205.588235294,
            "unit": "ns",
            "range": "± 131715.87347395663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275669.26923076925,
            "unit": "ns",
            "range": "± 11389.768441095708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261954.9090909091,
            "unit": "ns",
            "range": "± 9565.99561873148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236198.15384615384,
            "unit": "ns",
            "range": "± 3033.367239173705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4230313.533333333,
            "unit": "ns",
            "range": "± 24932.39226349835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909262.933333333,
            "unit": "ns",
            "range": "± 43959.502371853036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21045.80612244898,
            "unit": "ns",
            "range": "± 1910.3699304852803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93425.59595959596,
            "unit": "ns",
            "range": "± 7047.834090392438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70457.51612903226,
            "unit": "ns",
            "range": "± 2152.681008587009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86086.1530612245,
            "unit": "ns",
            "range": "± 11874.962600789326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4806.154639175258,
            "unit": "ns",
            "range": "± 808.917284865576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16583.763440860213,
            "unit": "ns",
            "range": "± 1356.5464975271761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132008.30859375,
            "unit": "ns",
            "range": "± 15831.207570400647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957063.1541666666,
            "unit": "ns",
            "range": "± 2233.379305942632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376349.7333333334,
            "unit": "ns",
            "range": "± 2077.8389958952703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564345.031808036,
            "unit": "ns",
            "range": "± 14309.792798909613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813748.1719447544,
            "unit": "ns",
            "range": "± 410.65996287698476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740126.4088309152,
            "unit": "ns",
            "range": "± 889.9433686097932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7672509.785714285,
            "unit": "ns",
            "range": "± 31012.47905943812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19783406.333333332,
            "unit": "ns",
            "range": "± 319603.95959836355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51274356.666666664,
            "unit": "ns",
            "range": "± 446103.88295371394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102475490.86666666,
            "unit": "ns",
            "range": "± 612545.3797636857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200912066.85714287,
            "unit": "ns",
            "range": "± 994887.3156670602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402914.868131868,
            "unit": "ns",
            "range": "± 86575.30743683454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687350.35,
            "unit": "ns",
            "range": "± 58873.33192476611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250455.892307692,
            "unit": "ns",
            "range": "± 104902.91692666414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5352805.35,
            "unit": "ns",
            "range": "± 103133.53170744226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50431.17894736842,
            "unit": "ns",
            "range": "± 5408.47511246056"
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
        "date": 1683891073532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333135.8333333335,
            "unit": "ns",
            "range": "± 70179.7712795713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532018.4,
            "unit": "ns",
            "range": "± 62746.65325941411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4357568.807692308,
            "unit": "ns",
            "range": "± 118618.54016536174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4476521.352941177,
            "unit": "ns",
            "range": "± 141198.71985660627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6899903.277777778,
            "unit": "ns",
            "range": "± 226662.17186308804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280883.1724137931,
            "unit": "ns",
            "range": "± 8078.749903600563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269491.2413793103,
            "unit": "ns",
            "range": "± 7788.207462270729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231889,
            "unit": "ns",
            "range": "± 3084.264904316748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4266758.923076923,
            "unit": "ns",
            "range": "± 59510.97198481069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3866509.2666666666,
            "unit": "ns",
            "range": "± 63830.49530533043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17764.314606741573,
            "unit": "ns",
            "range": "± 1011.9877334360965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85195.1625,
            "unit": "ns",
            "range": "± 3999.1633727718913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70690.89655172414,
            "unit": "ns",
            "range": "± 1514.280200171204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85874.94680851063,
            "unit": "ns",
            "range": "± 11114.095016212446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4703.163265306122,
            "unit": "ns",
            "range": "± 620.7081870589523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16660.65625,
            "unit": "ns",
            "range": "± 1257.5909369912904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5862604.403459822,
            "unit": "ns",
            "range": "± 14399.266161610696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841281.1724759615,
            "unit": "ns",
            "range": "± 2247.427220353966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345853.6609375,
            "unit": "ns",
            "range": "± 3406.9900643471856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654017.259635417,
            "unit": "ns",
            "range": "± 3057.0444911070226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832491.0063476562,
            "unit": "ns",
            "range": "± 947.2479316181697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748148.4970703125,
            "unit": "ns",
            "range": "± 582.2594534077228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7746380.052631579,
            "unit": "ns",
            "range": "± 171740.36005340985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20898546.6,
            "unit": "ns",
            "range": "± 335310.65623427054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53009272.266666666,
            "unit": "ns",
            "range": "± 760083.1735425375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105681144.8,
            "unit": "ns",
            "range": "± 981776.7568693433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209124827.58333334,
            "unit": "ns",
            "range": "± 1095598.201902625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371578.546511628,
            "unit": "ns",
            "range": "± 74014.33015201011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662166.5454545454,
            "unit": "ns",
            "range": "± 91077.23375027666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221903.8205128205,
            "unit": "ns",
            "range": "± 113378.11741440628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5503262.615384615,
            "unit": "ns",
            "range": "± 225929.97724994994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47694.939024390245,
            "unit": "ns",
            "range": "± 2375.1330221230314"
          }
        ]
      }
    ]
  }
}