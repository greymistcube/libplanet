window.BENCHMARK_DATA = {
  "lastUpdate": 1687488642816,
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
          "id": "f0cb568d30aeccaea3eeda7a77144cac765f49af",
          "message": "Prepare 2.3.0",
          "timestamp": "2023-06-23T11:37:59+09:00",
          "tree_id": "c6fb980fe742c5f31731823d660fa1da6b41728d",
          "url": "https://github.com/greymistcube/libplanet/commit/f0cb568d30aeccaea3eeda7a77144cac765f49af"
        },
        "date": 1687488635318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238744,
            "unit": "ns",
            "range": "± 60401.324411922345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473875.761904762,
            "unit": "ns",
            "range": "± 82340.55311625297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363076.8,
            "unit": "ns",
            "range": "± 53267.771407698834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4267966.627906977,
            "unit": "ns",
            "range": "± 149511.14540538331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6926856.166666667,
            "unit": "ns",
            "range": "± 207173.55183701505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7763099.642857143,
            "unit": "ns",
            "range": "± 23645.35291669264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19716054.92857143,
            "unit": "ns",
            "range": "± 135451.20208710094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50785370.266666666,
            "unit": "ns",
            "range": "± 385248.75148207194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101627727.13333334,
            "unit": "ns",
            "range": "± 587348.6682459293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202604194.85714287,
            "unit": "ns",
            "range": "± 1035983.9224061981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281250.4893617021,
            "unit": "ns",
            "range": "± 9608.148844176014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267127.97777777776,
            "unit": "ns",
            "range": "± 9306.896835360345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236294,
            "unit": "ns",
            "range": "± 3710.576525803794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191982.466666667,
            "unit": "ns",
            "range": "± 25193.79680416439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890994.066666667,
            "unit": "ns",
            "range": "± 46734.85799313073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17585.010752688173,
            "unit": "ns",
            "range": "± 1276.196416450612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83984.97619047618,
            "unit": "ns",
            "range": "± 4440.640187690815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70937.8125,
            "unit": "ns",
            "range": "± 1330.6571919544117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86744.19791666667,
            "unit": "ns",
            "range": "± 9242.22348004816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4223.979166666667,
            "unit": "ns",
            "range": "± 555.1026643625991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16640.697916666668,
            "unit": "ns",
            "range": "± 1507.8629012074407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45726.61538461538,
            "unit": "ns",
            "range": "± 2437.2985034401913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053590.947916667,
            "unit": "ns",
            "range": "± 35574.55766875055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004898.4285714286,
            "unit": "ns",
            "range": "± 3071.9823300889766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338437.491436298,
            "unit": "ns",
            "range": "± 701.5011621356103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590940.88125,
            "unit": "ns",
            "range": "± 2207.360291114695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814584.9924479167,
            "unit": "ns",
            "range": "± 434.4036781958301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743452.9138532366,
            "unit": "ns",
            "range": "± 448.2044732303213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374029.2653061224,
            "unit": "ns",
            "range": "± 109281.93280840735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571593.464285714,
            "unit": "ns",
            "range": "± 72765.52648950582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162774.736111111,
            "unit": "ns",
            "range": "± 106485.83709728568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5221967.448275862,
            "unit": "ns",
            "range": "± 151506.9109419921"
          }
        ]
      }
    ]
  }
}