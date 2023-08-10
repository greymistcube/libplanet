window.BENCHMARK_DATA = {
  "lastUpdate": 1691650960120,
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
          "id": "9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:48:07+09:00",
          "tree_id": "70397303ba4a4f4f92fafbf90942603852dd6bde",
          "url": "https://github.com/greymistcube/libplanet/commit/9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1"
        },
        "date": 1691650953090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567756.25,
            "unit": "ns",
            "range": "± 69896.93364518933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3885808.625,
            "unit": "ns",
            "range": "± 100328.4544222939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536712.027027027,
            "unit": "ns",
            "range": "± 152346.8129737188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4085503.2,
            "unit": "ns",
            "range": "± 164484.2952347036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6438207.027027027,
            "unit": "ns",
            "range": "± 198912.0740427073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8747439.333333334,
            "unit": "ns",
            "range": "± 181540.5951545241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23242352,
            "unit": "ns",
            "range": "± 265715.71135761944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56774437.85714286,
            "unit": "ns",
            "range": "± 430563.92606152745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113708739.2,
            "unit": "ns",
            "range": "± 1509713.248985061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226753803.7857143,
            "unit": "ns",
            "range": "± 2875698.2006869535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51288.97647058823,
            "unit": "ns",
            "range": "± 2781.170817926759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5014147.49609375,
            "unit": "ns",
            "range": "± 19450.039235792727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1615969.1401041667,
            "unit": "ns",
            "range": "± 2445.7330222221008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089541.3611979166,
            "unit": "ns",
            "range": "± 1651.1135602624647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633883.9765625,
            "unit": "ns",
            "range": "± 3021.390531056623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821957.7961588542,
            "unit": "ns",
            "range": "± 936.4856029997462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762210.9109074519,
            "unit": "ns",
            "range": "± 369.45552435513423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283627.27906976745,
            "unit": "ns",
            "range": "± 10252.013394185138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278734.26785714284,
            "unit": "ns",
            "range": "± 11899.805577466108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243614.92753623187,
            "unit": "ns",
            "range": "± 11784.847828160831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4580684,
            "unit": "ns",
            "range": "± 56490.261620920115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162080.210526316,
            "unit": "ns",
            "range": "± 91498.4638235218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22622.07608695652,
            "unit": "ns",
            "range": "± 1588.0702037911092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92200.76288659793,
            "unit": "ns",
            "range": "± 5698.092171166438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79123.41269841269,
            "unit": "ns",
            "range": "± 3519.322619184076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90051.20212765958,
            "unit": "ns",
            "range": "± 11028.974408669748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5461.808510638298,
            "unit": "ns",
            "range": "± 666.0516185975885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20668.010416666668,
            "unit": "ns",
            "range": "± 1778.5588163027517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513192.2777777778,
            "unit": "ns",
            "range": "± 83578.79242146203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828693.888888889,
            "unit": "ns",
            "range": "± 71624.80232988342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891080.0759493671,
            "unit": "ns",
            "range": "± 96978.57777071209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4855163.692307692,
            "unit": "ns",
            "range": "± 130525.08356872079"
          }
        ]
      }
    ]
  }
}