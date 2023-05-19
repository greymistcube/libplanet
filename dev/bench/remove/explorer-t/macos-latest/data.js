window.BENCHMARK_DATA = {
  "lastUpdate": 1684475927078,
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
          "id": "68abe2621ad7ee020dce0d6fb79b25d81f103d5d",
          "message": "Removed t from rest of the Explorer",
          "timestamp": "2023-05-19T14:31:04+09:00",
          "tree_id": "445f0508d49175ce2fa994a79892c3f4394ccff0",
          "url": "https://github.com/greymistcube/libplanet/commit/68abe2621ad7ee020dce0d6fb79b25d81f103d5d"
        },
        "date": 1684475170056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8055399.428571428,
            "unit": "ns",
            "range": "± 70090.52639563769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20111239.31372549,
            "unit": "ns",
            "range": "± 813383.03204971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49842901.55,
            "unit": "ns",
            "range": "± 1080400.0241682648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98306859.75,
            "unit": "ns",
            "range": "± 2147355.7140864613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203037986.42857143,
            "unit": "ns",
            "range": "± 2261283.5169356195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68949.6,
            "unit": "ns",
            "range": "± 7796.032446195158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336850.6195652174,
            "unit": "ns",
            "range": "± 38066.52523531721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312641.4111111111,
            "unit": "ns",
            "range": "± 22164.650608668962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307680.7696629214,
            "unit": "ns",
            "range": "± 17854.177583948884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271988.166666667,
            "unit": "ns",
            "range": "± 89842.83175062209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3705926.25,
            "unit": "ns",
            "range": "± 138513.12345142465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18345.68888888889,
            "unit": "ns",
            "range": "± 2072.5609010688204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94568.79787234042,
            "unit": "ns",
            "range": "± 11361.933936908015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99478.79545454546,
            "unit": "ns",
            "range": "± 6214.887957597975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114933.375,
            "unit": "ns",
            "range": "± 15338.19196869113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7228.888888888889,
            "unit": "ns",
            "range": "± 912.4316375124127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18427,
            "unit": "ns",
            "range": "± 2979.7856733900608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496563.2268041237,
            "unit": "ns",
            "range": "± 155348.77951802418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2781059.4886363638,
            "unit": "ns",
            "range": "± 152122.05464994026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529042.210526316,
            "unit": "ns",
            "range": "± 235201.13108847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6324747.474358974,
            "unit": "ns",
            "range": "± 323797.01395039784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308304.9556962023,
            "unit": "ns",
            "range": "± 171122.00862953035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401334.855555556,
            "unit": "ns",
            "range": "± 201356.27161018396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462958.825581395,
            "unit": "ns",
            "range": "± 161830.21166667846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498846.239583333,
            "unit": "ns",
            "range": "± 291882.4635554432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7877332,
            "unit": "ns",
            "range": "± 343149.2739727641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6644282.195,
            "unit": "ns",
            "range": "± 176000.8222315713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007774.0655691964,
            "unit": "ns",
            "range": "± 29564.551962954127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253288.327445652,
            "unit": "ns",
            "range": "± 31684.347670295974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502523.010516827,
            "unit": "ns",
            "range": "± 15198.806313513776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862774.5901692709,
            "unit": "ns",
            "range": "± 9226.038062627249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713841.0365885417,
            "unit": "ns",
            "range": "± 11595.847158291463"
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
          "id": "1bff4aae077ac2d0f1d0b99f720422c0ef4bbe7c",
          "message": "Changelog",
          "timestamp": "2023-05-19T14:42:41+09:00",
          "tree_id": "e5dcb36f27486030dfa89ad341f7196be4e9d4cb",
          "url": "https://github.com/greymistcube/libplanet/commit/1bff4aae077ac2d0f1d0b99f720422c0ef4bbe7c"
        },
        "date": 1684475902088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883203.904761905,
            "unit": "ns",
            "range": "± 277273.28604032606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19405617.352941178,
            "unit": "ns",
            "range": "± 787480.0666385359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47890392.06666667,
            "unit": "ns",
            "range": "± 864491.607636821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101770102.96666667,
            "unit": "ns",
            "range": "± 1803864.8485455518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210352397.96774194,
            "unit": "ns",
            "range": "± 8993032.435494555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59155.56043956044,
            "unit": "ns",
            "range": "± 8272.548021026858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325868.2849462366,
            "unit": "ns",
            "range": "± 25404.82159639295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306159.9587628866,
            "unit": "ns",
            "range": "± 21222.148690458947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307536.5967741936,
            "unit": "ns",
            "range": "± 18824.852067704745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113123.533333333,
            "unit": "ns",
            "range": "± 69124.56395818728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3809620.947368421,
            "unit": "ns",
            "range": "± 81113.80606864358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18328.08695652174,
            "unit": "ns",
            "range": "± 2310.6334137147874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100224.68421052632,
            "unit": "ns",
            "range": "± 11143.87513415325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109164.93,
            "unit": "ns",
            "range": "± 12463.347967163802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119893.74468085106,
            "unit": "ns",
            "range": "± 12878.292266977058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6370.34375,
            "unit": "ns",
            "range": "± 1232.9479890692876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18312.963157894737,
            "unit": "ns",
            "range": "± 4501.471085338531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1536819.393939394,
            "unit": "ns",
            "range": "± 143787.69240906127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792399.9109589043,
            "unit": "ns",
            "range": "± 138735.04107929333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408202.163043478,
            "unit": "ns",
            "range": "± 219182.86987425314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6325923.44,
            "unit": "ns",
            "range": "± 319120.137181368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378905.785714286,
            "unit": "ns",
            "range": "± 59555.018152162425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409527.195652174,
            "unit": "ns",
            "range": "± 118282.32433698987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4406564.354166667,
            "unit": "ns",
            "range": "± 171617.5961020004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4345701.590909091,
            "unit": "ns",
            "range": "± 183498.0423447167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7607401.626865672,
            "unit": "ns",
            "range": "± 360391.6963739565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6648878.26484375,
            "unit": "ns",
            "range": "± 172620.45093307563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000458.1573016827,
            "unit": "ns",
            "range": "± 54300.666885661856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345016.6996744792,
            "unit": "ns",
            "range": "± 18084.05823173599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2747275.866383272,
            "unit": "ns",
            "range": "± 87158.73291093127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863145.307421875,
            "unit": "ns",
            "range": "± 11633.41307687903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708263.6061197916,
            "unit": "ns",
            "range": "± 8722.974330193954"
          }
        ]
      }
    ]
  }
}