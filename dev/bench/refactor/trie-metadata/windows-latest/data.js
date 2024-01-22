window.BENCHMARK_DATA = {
  "lastUpdate": 1705898721884,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705898705284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990677.3684210526,
            "unit": "ns",
            "range": "± 99885.32301414166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771771.2328767122,
            "unit": "ns",
            "range": "± 87779.76462502943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532934.375,
            "unit": "ns",
            "range": "± 153257.73944782655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10930364.89361702,
            "unit": "ns",
            "range": "± 1004246.0176784905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34700,
            "unit": "ns",
            "range": "± 1662.1331376168935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5025493.333333333,
            "unit": "ns",
            "range": "± 64961.53220688892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13158650,
            "unit": "ns",
            "range": "± 168577.80738536478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33178173.076923076,
            "unit": "ns",
            "range": "± 321570.5032955349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68137233.33333333,
            "unit": "ns",
            "range": "± 1230372.4921843018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134559071.42857143,
            "unit": "ns",
            "range": "± 690609.1095531554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3492098.8020833335,
            "unit": "ns",
            "range": "± 15880.349429142065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088671.3541666667,
            "unit": "ns",
            "range": "± 2583.400878843571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763085.4073660715,
            "unit": "ns",
            "range": "± 1364.091670456194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937414.0904017857,
            "unit": "ns",
            "range": "± 5805.089944681967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622384.1646634615,
            "unit": "ns",
            "range": "± 878.831999943603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581725.2473958334,
            "unit": "ns",
            "range": "± 1990.020469506394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170946.0317460317,
            "unit": "ns",
            "range": "± 93788.68290177973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266188.13559322,
            "unit": "ns",
            "range": "± 70914.10560706709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858297.727272727,
            "unit": "ns",
            "range": "± 102149.21026373765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2789870.930232558,
            "unit": "ns",
            "range": "± 130931.49274359344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12526374.468085106,
            "unit": "ns",
            "range": "± 1545716.5631300781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177528.26086956522,
            "unit": "ns",
            "range": "± 6761.719473739346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170747.36842105264,
            "unit": "ns",
            "range": "± 5567.030025810052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141889.6551724138,
            "unit": "ns",
            "range": "± 3862.211138305011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2835040,
            "unit": "ns",
            "range": "± 42962.937515956706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501714.285714286,
            "unit": "ns",
            "range": "± 44306.70824609289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11873.863636363636,
            "unit": "ns",
            "range": "± 1151.3604464905623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58220.87912087912,
            "unit": "ns",
            "range": "± 5144.587587045385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46012.94117647059,
            "unit": "ns",
            "range": "± 2484.56129284974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60336.26373626374,
            "unit": "ns",
            "range": "± 10802.587308228181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2825.2631578947367,
            "unit": "ns",
            "range": "± 492.9219050511789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10827.956989247312,
            "unit": "ns",
            "range": "± 1381.1908528668332"
          }
        ]
      }
    ]
  }
}