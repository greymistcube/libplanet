window.BENCHMARK_DATA = {
  "lastUpdate": 1701154615688,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701154593286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967759.595959596,
            "unit": "ns",
            "range": "± 113124.62959162892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752795.6043956045,
            "unit": "ns",
            "range": "± 112236.05175609713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1380037.1134020619,
            "unit": "ns",
            "range": "± 162108.8326040485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5087121.276595744,
            "unit": "ns",
            "range": "± 289208.0137917404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34679.77528089887,
            "unit": "ns",
            "range": "± 2183.2617266624943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5001469.230769231,
            "unit": "ns",
            "range": "± 42230.861239449536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13255988.235294119,
            "unit": "ns",
            "range": "± 269980.87405025784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32162113.333333332,
            "unit": "ns",
            "range": "± 424407.09881410975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65211257.14285714,
            "unit": "ns",
            "range": "± 494157.2339530525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127397163.33333333,
            "unit": "ns",
            "range": "± 1269147.2175478793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314760.6584821427,
            "unit": "ns",
            "range": "± 14379.052366850603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088964.5963541667,
            "unit": "ns",
            "range": "± 3658.160026294278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733284.3470982143,
            "unit": "ns",
            "range": "± 3663.3703056414315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1896166.9771634615,
            "unit": "ns",
            "range": "± 3054.29746353272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617774.0652901785,
            "unit": "ns",
            "range": "± 2242.1237253589356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560924.9609375,
            "unit": "ns",
            "range": "± 968.7070436578443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149691.6666666665,
            "unit": "ns",
            "range": "± 55542.9400410691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272221.4285714286,
            "unit": "ns",
            "range": "± 29197.561240925283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2797285.4838709678,
            "unit": "ns",
            "range": "± 83307.84096104879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2641372.222222222,
            "unit": "ns",
            "range": "± 87774.84706781195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5879788.235294118,
            "unit": "ns",
            "range": "± 185871.04321513438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176796.06741573033,
            "unit": "ns",
            "range": "± 10427.455631646146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166865.47619047618,
            "unit": "ns",
            "range": "± 8396.60708940725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141648.27586206896,
            "unit": "ns",
            "range": "± 4083.295298237789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752773.076923077,
            "unit": "ns",
            "range": "± 37032.30917829623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537833.3333333335,
            "unit": "ns",
            "range": "± 32622.399549710506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11974.193548387097,
            "unit": "ns",
            "range": "± 1733.8010031873835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56322.82608695652,
            "unit": "ns",
            "range": "± 5536.295886713973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45944.252873563215,
            "unit": "ns",
            "range": "± 2951.6001305495724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64782.82828282828,
            "unit": "ns",
            "range": "± 18014.393567163486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2646.907216494845,
            "unit": "ns",
            "range": "± 528.2545173034932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11782.65306122449,
            "unit": "ns",
            "range": "± 2425.807358862224"
          }
        ]
      }
    ]
  }
}