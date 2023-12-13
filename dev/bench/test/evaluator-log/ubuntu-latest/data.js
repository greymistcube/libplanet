window.BENCHMARK_DATA = {
  "lastUpdate": 1702437992619,
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
          "id": "08a91d1f1a64abf46de24658a987d2f2bf94850d",
          "message": "Added trie inconsistent log",
          "timestamp": "2023-12-13T12:14:14+09:00",
          "tree_id": "f3274a42fab16eeb412f7c65652d5dd7e3c42c11",
          "url": "https://github.com/greymistcube/libplanet/commit/08a91d1f1a64abf46de24658a987d2f2bf94850d"
        },
        "date": 1702437983829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204318.77083333334,
            "unit": "ns",
            "range": "± 8074.486522741847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200332.6379310345,
            "unit": "ns",
            "range": "± 5466.095856172575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167705.92307692306,
            "unit": "ns",
            "range": "± 4442.1574773803495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068530.6428571427,
            "unit": "ns",
            "range": "± 39302.42480062511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855366.0714285714,
            "unit": "ns",
            "range": "± 32755.97668885267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14685.908163265307,
            "unit": "ns",
            "range": "± 2498.101026560324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60126.12359550562,
            "unit": "ns",
            "range": "± 4410.877228821086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55291.413043478264,
            "unit": "ns",
            "range": "± 5978.185467753652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62069.34444444445,
            "unit": "ns",
            "range": "± 7974.7265800209325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3172.061855670103,
            "unit": "ns",
            "range": "± 492.426999971252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13026.694736842106,
            "unit": "ns",
            "range": "± 2278.7087752538305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40207.114583333336,
            "unit": "ns",
            "range": "± 5400.449444005449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925191.3727272727,
            "unit": "ns",
            "range": "± 39011.451678181074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827483.7926829269,
            "unit": "ns",
            "range": "± 65359.80204347467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1407584.5102040817,
            "unit": "ns",
            "range": "± 115404.6955924832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6106332.3522727275,
            "unit": "ns",
            "range": "± 336038.67958919087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2639621,
            "unit": "ns",
            "range": "± 51514.92356848321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2578279.515151515,
            "unit": "ns",
            "range": "± 117314.80194502212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186761.5,
            "unit": "ns",
            "range": "± 61578.79293284878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168149.6,
            "unit": "ns",
            "range": "± 83993.49060145475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7064366.576923077,
            "unit": "ns",
            "range": "± 181689.59414587796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5582990,
            "unit": "ns",
            "range": "± 10503.903490867315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14395506.366666667,
            "unit": "ns",
            "range": "± 76379.2660906897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36899541,
            "unit": "ns",
            "range": "± 192722.0965607453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75925051.3,
            "unit": "ns",
            "range": "± 786106.106581239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151671051.93333334,
            "unit": "ns",
            "range": "± 1061875.258016043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759067.376502404,
            "unit": "ns",
            "range": "± 8266.40643559218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218719.840983073,
            "unit": "ns",
            "range": "± 2086.627234509402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772726.7804236779,
            "unit": "ns",
            "range": "± 1618.3441327892913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946258.5401041666,
            "unit": "ns",
            "range": "± 24400.648014029655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623153.1393694197,
            "unit": "ns",
            "range": "± 774.9315203483762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566979.0736177885,
            "unit": "ns",
            "range": "± 2434.403567474002"
          }
        ]
      }
    ]
  }
}