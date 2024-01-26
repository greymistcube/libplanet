window.BENCHMARK_DATA = {
  "lastUpdate": 1706255901551,
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
          "id": "abee3c445fe3554fef83f605019dbdab639394eb",
          "message": "Prepare 4.0.2",
          "timestamp": "2024-01-26T16:47:09+09:00",
          "tree_id": "45947cb5d90cbe1550fc6fa9f09310ccc7cd8312",
          "url": "https://github.com/greymistcube/libplanet/commit/abee3c445fe3554fef83f605019dbdab639394eb"
        },
        "date": 1706255893893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480075.8913043477,
            "unit": "ns",
            "range": "± 89992.98217169264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541775.9,
            "unit": "ns",
            "range": "± 56836.66424700095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3143852.5833333335,
            "unit": "ns",
            "range": "± 104931.38444373338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3145301.725,
            "unit": "ns",
            "range": "± 162856.35092733245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13833664.129032258,
            "unit": "ns",
            "range": "± 959751.4419677744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40862.36842105263,
            "unit": "ns",
            "range": "± 4879.458574457131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979243.1288659794,
            "unit": "ns",
            "range": "± 101760.95040730666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1857854.4545454546,
            "unit": "ns",
            "range": "± 77941.53901003319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1585321.0106382978,
            "unit": "ns",
            "range": "± 94685.31209056692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13073578.540816326,
            "unit": "ns",
            "range": "± 1201631.3159642017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5568203.071428572,
            "unit": "ns",
            "range": "± 25559.41490983248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14160283.5,
            "unit": "ns",
            "range": "± 157374.2169662085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36787995.26923077,
            "unit": "ns",
            "range": "± 285792.5937570093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77041143.92857143,
            "unit": "ns",
            "range": "± 535610.7932392504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151318273.57142857,
            "unit": "ns",
            "range": "± 556804.3185893965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3584349.1263020835,
            "unit": "ns",
            "range": "± 4597.5199720317705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205815.3366350445,
            "unit": "ns",
            "range": "± 3179.9636085794486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765370.0036969866,
            "unit": "ns",
            "range": "± 2785.6739360459205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949000.4938802083,
            "unit": "ns",
            "range": "± 23695.883740007037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613538.8883713942,
            "unit": "ns",
            "range": "± 1846.523155033494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586636.5010416667,
            "unit": "ns",
            "range": "± 10488.999330190287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200981.76315789475,
            "unit": "ns",
            "range": "± 7954.247444708654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195282.5909090909,
            "unit": "ns",
            "range": "± 7899.429595611758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179005.3947368421,
            "unit": "ns",
            "range": "± 3842.364172322626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219145.5,
            "unit": "ns",
            "range": "± 52714.58711086743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2810839.8666666667,
            "unit": "ns",
            "range": "± 42898.21101142742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13722.335051546392,
            "unit": "ns",
            "range": "± 2233.0940870628933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67148.20833333333,
            "unit": "ns",
            "range": "± 8244.393557751095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74595.42424242424,
            "unit": "ns",
            "range": "± 17013.115263861793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66039.11224489796,
            "unit": "ns",
            "range": "± 12275.670285839898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3217.2065217391305,
            "unit": "ns",
            "range": "± 489.26573237871094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12055.547368421052,
            "unit": "ns",
            "range": "± 1177.536951296448"
          }
        ]
      }
    ]
  }
}