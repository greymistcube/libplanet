window.BENCHMARK_DATA = {
  "lastUpdate": 1693798053977,
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
          "id": "aa648e7190f598c9d6958fd46da135d82142a85b",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:10:43+09:00",
          "tree_id": "0e30da4a540935e01029fe8a98862a01b934b52b",
          "url": "https://github.com/greymistcube/libplanet/commit/aa648e7190f598c9d6958fd46da135d82142a85b"
        },
        "date": 1693798044446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716009.6153846155,
            "unit": "ns",
            "range": "± 85783.26415975377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273935.925925926,
            "unit": "ns",
            "range": "± 89579.03394163937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200340.2647058824,
            "unit": "ns",
            "range": "± 100498.35366255564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764632.810810811,
            "unit": "ns",
            "range": "± 194434.05433703077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338383.2083333333,
            "unit": "ns",
            "range": "± 7936.6379749875505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323798.0256410256,
            "unit": "ns",
            "range": "± 11163.030109973157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311105.76923076925,
            "unit": "ns",
            "range": "± 8391.411053250544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5441770.2,
            "unit": "ns",
            "range": "± 42374.93243349017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4873718.333333333,
            "unit": "ns",
            "range": "± 83543.94671383327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25537.20879120879,
            "unit": "ns",
            "range": "± 1948.0511601568685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109620.42857142857,
            "unit": "ns",
            "range": "± 8993.00677445318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92119.22105263158,
            "unit": "ns",
            "range": "± 8217.847337038527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100419.51041666667,
            "unit": "ns",
            "range": "± 13411.178153822822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6794.96875,
            "unit": "ns",
            "range": "± 700.041629636184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23780.633333333335,
            "unit": "ns",
            "range": "± 2216.0720410246677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60684.79120879121,
            "unit": "ns",
            "range": "± 3469.889663684434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10189879.51724138,
            "unit": "ns",
            "range": "± 296218.3576509084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27517187.266666666,
            "unit": "ns",
            "range": "± 430333.97325888753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69084539,
            "unit": "ns",
            "range": "± 849134.4594848164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137103844.46666667,
            "unit": "ns",
            "range": "± 1826800.1195509231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265346518,
            "unit": "ns",
            "range": "± 4952470.603797637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4354801.333333333,
            "unit": "ns",
            "range": "± 158139.727885626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4676679.230769231,
            "unit": "ns",
            "range": "± 47951.57982999421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5964874.588235294,
            "unit": "ns",
            "range": "± 117609.51516834152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4943801.666666667,
            "unit": "ns",
            "range": "± 172280.55266312644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7694694,
            "unit": "ns",
            "range": "± 199772.97961164985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095735.034040178,
            "unit": "ns",
            "range": "± 44402.587973126036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857974.7294921875,
            "unit": "ns",
            "range": "± 24768.166241164967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288073.6215122768,
            "unit": "ns",
            "range": "± 16914.183663427488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3083118.7391927084,
            "unit": "ns",
            "range": "± 45187.20600974094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973020.7815104167,
            "unit": "ns",
            "range": "± 12651.500941265296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897558.9508463541,
            "unit": "ns",
            "range": "± 11877.249680636709"
          }
        ]
      }
    ]
  }
}