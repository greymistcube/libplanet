window.BENCHMARK_DATA = {
  "lastUpdate": 1679031600609,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031577642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664503.1914893617,
            "unit": "ns",
            "range": "± 163895.31175574035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3123258.695652174,
            "unit": "ns",
            "range": "± 205724.742031663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2695713.9784946237,
            "unit": "ns",
            "range": "± 170323.26208367903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6497134.065934066,
            "unit": "ns",
            "range": "± 454135.5654720491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54706.98924731183,
            "unit": "ns",
            "range": "± 6602.1801051764305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8863068.181818182,
            "unit": "ns",
            "range": "± 484524.76836574054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24219172.54901961,
            "unit": "ns",
            "range": "± 971260.0175191876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61387158.823529415,
            "unit": "ns",
            "range": "± 2499034.360402151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 123239365.51724137,
            "unit": "ns",
            "range": "± 5399186.922626104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 246385182.2222222,
            "unit": "ns",
            "range": "± 9237309.09516818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957451.171875,
            "unit": "ns",
            "range": "± 113674.35882595595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907687.2265625,
            "unit": "ns",
            "range": "± 30276.392253630256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392776.8489583333,
            "unit": "ns",
            "range": "± 23480.978975428407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3186178.653492647,
            "unit": "ns",
            "range": "± 63208.470703835235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026256.3020833334,
            "unit": "ns",
            "range": "± 14205.971561813858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940930.7291666666,
            "unit": "ns",
            "range": "± 15804.467092961208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3779250,
            "unit": "ns",
            "range": "± 252383.6868269106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6257287.671232876,
            "unit": "ns",
            "range": "± 307458.3905656564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28399427.586206898,
            "unit": "ns",
            "range": "± 824518.6565057873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7305604.761904762,
            "unit": "ns",
            "range": "± 332045.44356136216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32861650,
            "unit": "ns",
            "range": "± 1005286.181249957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206033.70786516854,
            "unit": "ns",
            "range": "± 13226.582598383802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207064.83516483515,
            "unit": "ns",
            "range": "± 17484.033183491058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186543.6170212766,
            "unit": "ns",
            "range": "± 20240.39163265247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14039051.42857143,
            "unit": "ns",
            "range": "± 677154.7408930042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10978241.237113401,
            "unit": "ns",
            "range": "± 661808.6154547404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25554.639175257733,
            "unit": "ns",
            "range": "± 7658.15225509387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60429.292929292926,
            "unit": "ns",
            "range": "± 10008.366423874642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45772.916666666664,
            "unit": "ns",
            "range": "± 6865.282286781293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118067.02127659574,
            "unit": "ns",
            "range": "± 19235.572100734436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10117,
            "unit": "ns",
            "range": "± 5652.192834500946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25008.08080808081,
            "unit": "ns",
            "range": "± 6945.409242400611"
          }
        ]
      }
    ]
  }
}