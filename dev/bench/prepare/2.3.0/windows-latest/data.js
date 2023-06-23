window.BENCHMARK_DATA = {
  "lastUpdate": 1687489174847,
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
        "date": 1687489149627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1752660.4166666667,
            "unit": "ns",
            "range": "± 182226.07328559685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209051.6129032257,
            "unit": "ns",
            "range": "± 204461.21861088602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2626622.727272727,
            "unit": "ns",
            "range": "± 143467.42729945623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6612105.294117647,
            "unit": "ns",
            "range": "± 350550.86700583616"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54320.21276595745,
            "unit": "ns",
            "range": "± 4050.051898970112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9283466,
            "unit": "ns",
            "range": "± 372249.7398527072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24302713.79310345,
            "unit": "ns",
            "range": "± 570956.7995442499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64818735.48387097,
            "unit": "ns",
            "range": "± 1965672.5287711562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128230855.81395349,
            "unit": "ns",
            "range": "± 4709457.955378443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259298257.89473686,
            "unit": "ns",
            "range": "± 5649254.686860696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5937482.8125,
            "unit": "ns",
            "range": "± 114698.92557600439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970604.4791666667,
            "unit": "ns",
            "range": "± 35903.905777310305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450725.78125,
            "unit": "ns",
            "range": "± 18463.554111521356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3310320.1021634615,
            "unit": "ns",
            "range": "± 87900.40845133213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051807.1001838236,
            "unit": "ns",
            "range": "± 21589.94467078664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933594.1351996528,
            "unit": "ns",
            "range": "± 18887.411688088225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3939925,
            "unit": "ns",
            "range": "± 155331.2171499232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4322672,
            "unit": "ns",
            "range": "± 112252.96402916644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5195557.142857143,
            "unit": "ns",
            "range": "± 121889.5096857337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5165712.359550562,
            "unit": "ns",
            "range": "± 269983.46743164613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8183255.714285715,
            "unit": "ns",
            "range": "± 264855.42775908025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317689.74358974356,
            "unit": "ns",
            "range": "± 8898.604115010483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302432,
            "unit": "ns",
            "range": "± 11096.8912727109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278305.4945054945,
            "unit": "ns",
            "range": "± 17341.538843913753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4996509.090909091,
            "unit": "ns",
            "range": "± 156490.23804145973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4545104.347826087,
            "unit": "ns",
            "range": "± 174661.99479314545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23932.222222222223,
            "unit": "ns",
            "range": "± 1754.9818512956276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103656.84210526316,
            "unit": "ns",
            "range": "± 6409.910090509934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88611.23595505618,
            "unit": "ns",
            "range": "± 6329.520271248611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114911.70212765958,
            "unit": "ns",
            "range": "± 19949.203538056125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6341.237113402062,
            "unit": "ns",
            "range": "± 1071.092955944961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22145.16129032258,
            "unit": "ns",
            "range": "± 1990.7130101850585"
          }
        ]
      }
    ]
  }
}