window.BENCHMARK_DATA = {
  "lastUpdate": 1707290714034,
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
          "id": "b601a8368715d02bd5b819a8dfa54b89e8488656",
          "message": "Merge tag '4.0.4' into merge/4.0.4-to-main\n\nLibplanet 4.0.4",
          "timestamp": "2024-02-07T16:06:28+09:00",
          "tree_id": "4063e79e09cf7026189cd482874f9a0e47716b23",
          "url": "https://github.com/greymistcube/libplanet/commit/b601a8368715d02bd5b819a8dfa54b89e8488656"
        },
        "date": 1707290699133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9129552.974747475,
            "unit": "ns",
            "range": "± 577170.368380831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22048392.241935484,
            "unit": "ns",
            "range": "± 985422.8917778363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53157659.04347826,
            "unit": "ns",
            "range": "± 1196834.4314038474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107270550.03333333,
            "unit": "ns",
            "range": "± 1890052.2517051846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222240739.35,
            "unit": "ns",
            "range": "± 5073493.575854426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70770.25287356322,
            "unit": "ns",
            "range": "± 7233.143458009707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319056.89361702127,
            "unit": "ns",
            "range": "± 33549.1724829337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305687.6,
            "unit": "ns",
            "range": "± 26542.29025432208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305275.402173913,
            "unit": "ns",
            "range": "± 30753.478038294514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4927023.1630434785,
            "unit": "ns",
            "range": "± 521499.76049353974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977235.5,
            "unit": "ns",
            "range": "± 167324.3677589308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20707.938144329895,
            "unit": "ns",
            "range": "± 4111.171547884376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99825.33333333333,
            "unit": "ns",
            "range": "± 16927.222416890414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117626.15730337078,
            "unit": "ns",
            "range": "± 9911.750948310702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115193.22680412371,
            "unit": "ns",
            "range": "± 20470.78512453029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7775.414893617021,
            "unit": "ns",
            "range": "± 1646.4329472129343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22461.005263157895,
            "unit": "ns",
            "range": "± 2892.0781009497796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557068.59375,
            "unit": "ns",
            "range": "± 174384.44413340726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2824504.4320987654,
            "unit": "ns",
            "range": "± 148240.07939546395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658551.2978723403,
            "unit": "ns",
            "range": "± 222613.7617887861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27309416.458762888,
            "unit": "ns",
            "range": "± 3164197.4295147695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435353.6979166665,
            "unit": "ns",
            "range": "± 238196.2065287717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3723408.163265306,
            "unit": "ns",
            "range": "± 326442.7652333084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4387334.390625,
            "unit": "ns",
            "range": "± 199023.9750286635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813365.829787234,
            "unit": "ns",
            "range": "± 361807.0437507673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33512898.42,
            "unit": "ns",
            "range": "± 4934731.920933236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5503244.150505515,
            "unit": "ns",
            "range": "± 91944.76633140775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854392.6434570313,
            "unit": "ns",
            "range": "± 42204.7681333751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076080.8438720703,
            "unit": "ns",
            "range": "± 32486.82458472152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546197.7115885415,
            "unit": "ns",
            "range": "± 91265.60875155618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815043.3987630209,
            "unit": "ns",
            "range": "± 17404.8868855684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797956.2218495244,
            "unit": "ns",
            "range": "± 17767.20121423138"
          }
        ]
      }
    ]
  }
}