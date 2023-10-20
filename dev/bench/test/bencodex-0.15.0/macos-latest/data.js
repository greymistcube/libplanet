window.BENCHMARK_DATA = {
  "lastUpdate": 1697778548202,
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
          "id": "6880cdf68f5595977006ed5852809792278cd8f0",
          "message": "Bump bencodex to 0.15.0-candidate",
          "timestamp": "2023-10-20T13:49:05+09:00",
          "tree_id": "77d3950ad43afd4a67de5c8f20e49e88a5ca87e2",
          "url": "https://github.com/greymistcube/libplanet/commit/6880cdf68f5595977006ed5852809792278cd8f0"
        },
        "date": 1697778529640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8411658.14864865,
            "unit": "ns",
            "range": "± 210511.21953766322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22132395.44680851,
            "unit": "ns",
            "range": "± 851587.5554606643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53086173.192307696,
            "unit": "ns",
            "range": "± 1426101.928334739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108233176.28571428,
            "unit": "ns",
            "range": "± 1290547.2339049657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218085281.73333332,
            "unit": "ns",
            "range": "± 3771638.406269567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68981.5054945055,
            "unit": "ns",
            "range": "± 12775.436777376626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300440.0106382979,
            "unit": "ns",
            "range": "± 24337.182031100874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302087.0752688172,
            "unit": "ns",
            "range": "± 32661.154774120518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292227.36363636365,
            "unit": "ns",
            "range": "± 31853.695387279688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110369.195652174,
            "unit": "ns",
            "range": "± 145255.82547960297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783286.42,
            "unit": "ns",
            "range": "± 99289.70259503248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19953.139784946237,
            "unit": "ns",
            "range": "± 2847.58722274092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105480.95833333333,
            "unit": "ns",
            "range": "± 21627.253608604056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95823.39,
            "unit": "ns",
            "range": "± 14282.995819282327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102840.35106382979,
            "unit": "ns",
            "range": "± 17963.134443241433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6703.197916666667,
            "unit": "ns",
            "range": "± 967.2819500760793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19830.121052631577,
            "unit": "ns",
            "range": "± 3497.668448877834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1745679.8535353534,
            "unit": "ns",
            "range": "± 324555.6491701719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3146772.762626263,
            "unit": "ns",
            "range": "± 284667.33968364366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168858.984848485,
            "unit": "ns",
            "range": "± 291365.4637162388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6051616.757731959,
            "unit": "ns",
            "range": "± 607156.5993931652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3251645.9482758623,
            "unit": "ns",
            "range": "± 198730.16557621007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371115.4479166665,
            "unit": "ns",
            "range": "± 193705.29630000037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4310372.0930232555,
            "unit": "ns",
            "range": "± 227051.0787248169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3763570.7881355933,
            "unit": "ns",
            "range": "± 158639.7948248507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6719392.238095238,
            "unit": "ns",
            "range": "± 359150.4262111874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6307840.2809244795,
            "unit": "ns",
            "range": "± 164015.74803786114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856085.1670572916,
            "unit": "ns",
            "range": "± 29434.399690092247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1103110.2342447916,
            "unit": "ns",
            "range": "± 11006.121708838898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2938004.1833043983,
            "unit": "ns",
            "range": "± 80497.85841164524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874738.7777932788,
            "unit": "ns",
            "range": "± 39644.97790687919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798639.875390625,
            "unit": "ns",
            "range": "± 11237.538134227032"
          }
        ]
      }
    ]
  }
}