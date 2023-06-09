window.BENCHMARK_DATA = {
  "lastUpdate": 1686311152199,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686311098314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10202375.976744186,
            "unit": "ns",
            "range": "± 2054135.9553403065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24843775.414893616,
            "unit": "ns",
            "range": "± 4729791.438224114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58660104.17977528,
            "unit": "ns",
            "range": "± 8553676.590956174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110155242.6,
            "unit": "ns",
            "range": "± 4176644.991557591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254268021.63186812,
            "unit": "ns",
            "range": "± 39248066.24117406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73211.67021276595,
            "unit": "ns",
            "range": "± 10721.800255712855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350739.4,
            "unit": "ns",
            "range": "± 23743.590284940085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344123.91489361704,
            "unit": "ns",
            "range": "± 26667.910897616566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333804.125,
            "unit": "ns",
            "range": "± 25192.277865055643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4435848.683673469,
            "unit": "ns",
            "range": "± 171258.3138520426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858580.6470588236,
            "unit": "ns",
            "range": "± 75738.38006415668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26234.790322580644,
            "unit": "ns",
            "range": "± 2838.9509719821467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123401.65625,
            "unit": "ns",
            "range": "± 15121.656408732146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120075.28767123287,
            "unit": "ns",
            "range": "± 5831.202528637193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129062.47916666667,
            "unit": "ns",
            "range": "± 16571.70393232434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8629.65306122449,
            "unit": "ns",
            "range": "± 1240.156178658462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19621.510101010103,
            "unit": "ns",
            "range": "± 4400.086936745379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1934469.8333333333,
            "unit": "ns",
            "range": "± 427472.0742718204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3423415.3604651163,
            "unit": "ns",
            "range": "± 421944.1321595623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764487.5,
            "unit": "ns",
            "range": "± 326061.01269462507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13289637.551020408,
            "unit": "ns",
            "range": "± 6595057.597150087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3708441.404761905,
            "unit": "ns",
            "range": "± 374531.899514472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827423.9404761903,
            "unit": "ns",
            "range": "± 676567.7303042145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4718325.966666667,
            "unit": "ns",
            "range": "± 210669.36636466725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4512996.125,
            "unit": "ns",
            "range": "± 300373.32779465034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8029425.120689655,
            "unit": "ns",
            "range": "± 347509.22442220186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7080792.1525,
            "unit": "ns",
            "range": "± 282899.8179157947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112729.036236702,
            "unit": "ns",
            "range": "± 81973.75760445873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375223.631802263,
            "unit": "ns",
            "range": "± 39990.00172353137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2757149.0001953123,
            "unit": "ns",
            "range": "± 219503.38745703493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907467.2862079327,
            "unit": "ns",
            "range": "± 7863.917018158567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820543.1252604167,
            "unit": "ns",
            "range": "± 9081.385779320497"
          }
        ]
      }
    ]
  }
}