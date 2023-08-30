window.BENCHMARK_DATA = {
  "lastUpdate": 1693401934553,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693401925398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663850.9325842697,
            "unit": "ns",
            "range": "± 89196.50161362294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3211479.8,
            "unit": "ns",
            "range": "± 95808.5305338834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131702.3658536584,
            "unit": "ns",
            "range": "± 113007.7674432447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6083414.402439024,
            "unit": "ns",
            "range": "± 319917.5594692128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334379.8095238095,
            "unit": "ns",
            "range": "± 7804.875326480543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322927.5172413793,
            "unit": "ns",
            "range": "± 8481.032192152968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286584.25,
            "unit": "ns",
            "range": "± 5285.18608313211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5341919.266666667,
            "unit": "ns",
            "range": "± 50653.35111106621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4778827.642857143,
            "unit": "ns",
            "range": "± 42554.93483018273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22499.14893617021,
            "unit": "ns",
            "range": "± 1438.731161101193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103314.22807017544,
            "unit": "ns",
            "range": "± 4474.375399417474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84674.17391304347,
            "unit": "ns",
            "range": "± 2087.884458928221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93059.58762886598,
            "unit": "ns",
            "range": "± 12990.192623309274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5907.65625,
            "unit": "ns",
            "range": "± 539.6354291385795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21551.705263157895,
            "unit": "ns",
            "range": "± 1328.6418026938718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58372.90697674418,
            "unit": "ns",
            "range": "± 3189.920410690365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9847517.615384616,
            "unit": "ns",
            "range": "± 63841.73587935829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27547563.214285713,
            "unit": "ns",
            "range": "± 167739.0664331766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68341949.13333334,
            "unit": "ns",
            "range": "± 701271.6930068511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133352846.42857143,
            "unit": "ns",
            "range": "± 1326056.4345162525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265739816.53333333,
            "unit": "ns",
            "range": "± 2172441.2885192703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4155940.785714286,
            "unit": "ns",
            "range": "± 69489.12397156238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4339089.94117647,
            "unit": "ns",
            "range": "± 86208.81243923861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5325051.451612903,
            "unit": "ns",
            "range": "± 160100.66601398814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4743584,
            "unit": "ns",
            "range": "± 71756.12342743533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7720631.24,
            "unit": "ns",
            "range": "± 197565.41739642425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126560.851041666,
            "unit": "ns",
            "range": "± 14123.755740798488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954498.8145833334,
            "unit": "ns",
            "range": "± 3490.210079798197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323942.9053385416,
            "unit": "ns",
            "range": "± 4104.104404059661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224565.4598214286,
            "unit": "ns",
            "range": "± 5303.2316334179095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046688.2626953125,
            "unit": "ns",
            "range": "± 1961.6630327390355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935460.2266376202,
            "unit": "ns",
            "range": "± 794.0826873478555"
          }
        ]
      }
    ]
  }
}