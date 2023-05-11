window.BENCHMARK_DATA = {
  "lastUpdate": 1683804778641,
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
      }
    ]
  }
}