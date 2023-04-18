window.BENCHMARK_DATA = {
  "lastUpdate": 1681801586186,
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
          "id": "ec6d776019167e45410d53ad191a92d77cef6a3f",
          "message": "Prepare 1.0.1",
          "timestamp": "2023-04-18T15:47:46+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/greymistcube/libplanet/commit/ec6d776019167e45410d53ad191a92d77cef6a3f"
        },
        "date": 1681801567062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8310754.307692308,
            "unit": "ns",
            "range": "± 53536.71031853534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20680242.666666668,
            "unit": "ns",
            "range": "± 214449.92071132886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52192033.384615384,
            "unit": "ns",
            "range": "± 797184.5675907951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106029071.91666667,
            "unit": "ns",
            "range": "± 2697750.3404780407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216042589.64285713,
            "unit": "ns",
            "range": "± 2672544.300575098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75263.62068965517,
            "unit": "ns",
            "range": "± 6980.819971230439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407202.0833333333,
            "unit": "ns",
            "range": "± 15456.950055369409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343152.2909090909,
            "unit": "ns",
            "range": "± 14235.56547117729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330303.7083333333,
            "unit": "ns",
            "range": "± 8465.645456678918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5583351.461538462,
            "unit": "ns",
            "range": "± 46051.85528947302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3956245.7,
            "unit": "ns",
            "range": "± 36190.164216656594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24369.186813186814,
            "unit": "ns",
            "range": "± 2951.040320941782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125921.05913978495,
            "unit": "ns",
            "range": "± 8864.740589968931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127225.28125,
            "unit": "ns",
            "range": "± 5872.129062713682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 265297.97872340423,
            "unit": "ns",
            "range": "± 25523.37757293743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10014.760416666666,
            "unit": "ns",
            "range": "± 1272.6549517469925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26184.944444444445,
            "unit": "ns",
            "range": "± 2928.814965753295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722516.9315789475,
            "unit": "ns",
            "range": "± 261408.0091996341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3134176.8139534886,
            "unit": "ns",
            "range": "± 220565.0301600154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3059738.4444444445,
            "unit": "ns",
            "range": "± 657331.6751483656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7761689.9655172415,
            "unit": "ns",
            "range": "± 1126469.55606517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360833.6315789474,
            "unit": "ns",
            "range": "± 112734.69020559949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564527.8777777776,
            "unit": "ns",
            "range": "± 135440.16455218228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4585576.22,
            "unit": "ns",
            "range": "± 121539.57897447783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4539655.732142857,
            "unit": "ns",
            "range": "± 193144.09334403832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8216110.481481481,
            "unit": "ns",
            "range": "± 228989.9426626503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7563870.701766305,
            "unit": "ns",
            "range": "± 290288.21999102534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2247138.972826087,
            "unit": "ns",
            "range": "± 183616.65744948687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290599.514485677,
            "unit": "ns",
            "range": "± 5318.900351249405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3030029.503502155,
            "unit": "ns",
            "range": "± 87075.91421884527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861691.2233537947,
            "unit": "ns",
            "range": "± 7250.484340373912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734196.806501116,
            "unit": "ns",
            "range": "± 8002.910391331671"
          }
        ]
      }
    ]
  }
}