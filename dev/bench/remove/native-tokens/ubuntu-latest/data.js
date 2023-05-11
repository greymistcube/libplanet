window.BENCHMARK_DATA = {
  "lastUpdate": 1683805158422,
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
      }
    ]
  }
}