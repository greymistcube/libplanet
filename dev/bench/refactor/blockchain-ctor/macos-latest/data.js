window.BENCHMARK_DATA = {
  "lastUpdate": 1684378033837,
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
          "id": "aef86503e565e1d28a3e2e8bf517c061cc31ebae",
          "message": "Require ActionEvaluator for Create",
          "timestamp": "2023-05-17T14:45:39+09:00",
          "tree_id": "62175bf7f8fa04bb04747b339acf8468137b30ac",
          "url": "https://github.com/greymistcube/libplanet/commit/aef86503e565e1d28a3e2e8bf517c061cc31ebae"
        },
        "date": 1684303660932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8185501.884615385,
            "unit": "ns",
            "range": "± 133925.99801416358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22539227.403225806,
            "unit": "ns",
            "range": "± 1401387.2528457607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56578633.583333336,
            "unit": "ns",
            "range": "± 1850143.039931336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109422102.5,
            "unit": "ns",
            "range": "± 7281639.098144478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245155723.84065935,
            "unit": "ns",
            "range": "± 13677902.769034663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78821.96511627907,
            "unit": "ns",
            "range": "± 9382.918749073231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369234.59574468085,
            "unit": "ns",
            "range": "± 39500.30390193946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379823.63402061857,
            "unit": "ns",
            "range": "± 53179.694087128795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361087.9381443299,
            "unit": "ns",
            "range": "± 47943.52810551668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4479025.831578948,
            "unit": "ns",
            "range": "± 323276.6845675913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096896.855670103,
            "unit": "ns",
            "range": "± 325200.4563705985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18834.94680851064,
            "unit": "ns",
            "range": "± 3394.579247264298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99057.63265306123,
            "unit": "ns",
            "range": "± 17894.088456770205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117773.44565217392,
            "unit": "ns",
            "range": "± 15974.358579610667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127446.40659340659,
            "unit": "ns",
            "range": "± 21737.123950093624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7963.239130434783,
            "unit": "ns",
            "range": "± 1358.5336824547528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22435.983516483517,
            "unit": "ns",
            "range": "± 4214.840546246184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640439.4719101123,
            "unit": "ns",
            "range": "± 148698.41453823194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3152232.940860215,
            "unit": "ns",
            "range": "± 201451.65951966596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2583203.3333333335,
            "unit": "ns",
            "range": "± 164231.8427600603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6560897.355263158,
            "unit": "ns",
            "range": "± 332665.3718716434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3697373.84375,
            "unit": "ns",
            "range": "± 391997.37529040256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4231069.40860215,
            "unit": "ns",
            "range": "± 668480.7537600244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4928667.979166667,
            "unit": "ns",
            "range": "± 365866.42336844833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4979027.966666667,
            "unit": "ns",
            "range": "± 476988.4969721804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8590060.5,
            "unit": "ns",
            "range": "± 801055.7214656377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7458757.20078125,
            "unit": "ns",
            "range": "± 488622.34849296557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166572.954005821,
            "unit": "ns",
            "range": "± 87719.71183241323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1546657.1949344757,
            "unit": "ns",
            "range": "± 69901.49169259638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3720166.342265625,
            "unit": "ns",
            "range": "± 148448.01133904798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092514.2507123163,
            "unit": "ns",
            "range": "± 58449.66929951119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886575.461277174,
            "unit": "ns",
            "range": "± 22325.542809923714"
          }
        ]
      },
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
          "id": "019cec3f7bda839dad81edfbe748d79d5f713218",
          "message": "Changelog",
          "timestamp": "2023-05-18T11:30:00+09:00",
          "tree_id": "1ed9e4e1d49ea8bca1a5e15c47da5942f1998376",
          "url": "https://github.com/greymistcube/libplanet/commit/019cec3f7bda839dad81edfbe748d79d5f713218"
        },
        "date": 1684378008042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8276429.743243244,
            "unit": "ns",
            "range": "± 409549.18508205033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20508053.96969697,
            "unit": "ns",
            "range": "± 902289.1080466601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52777082.74712644,
            "unit": "ns",
            "range": "± 3363131.261429088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105042001.16666667,
            "unit": "ns",
            "range": "± 2489230.5610052943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209412136.93333334,
            "unit": "ns",
            "range": "± 6212683.302116676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73007.47826086957,
            "unit": "ns",
            "range": "± 8667.890618815052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329239.01075268816,
            "unit": "ns",
            "range": "± 35089.88620469692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302480.6170212766,
            "unit": "ns",
            "range": "± 22407.553185605266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293325.67204301077,
            "unit": "ns",
            "range": "± 19216.553291494864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112092.8333333335,
            "unit": "ns",
            "range": "± 74014.2566514497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849085.9032258065,
            "unit": "ns",
            "range": "± 116223.23592218406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17955.814606741573,
            "unit": "ns",
            "range": "± 2639.324068063922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88377.17708333333,
            "unit": "ns",
            "range": "± 8842.042189681119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87099.07142857143,
            "unit": "ns",
            "range": "± 11617.830649923817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101566.71578947369,
            "unit": "ns",
            "range": "± 13910.850226905122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5504.428571428572,
            "unit": "ns",
            "range": "± 1008.3680318360286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15716.505376344086,
            "unit": "ns",
            "range": "± 1628.6256918004576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551939.701030928,
            "unit": "ns",
            "range": "± 142564.63883191464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2959205.2391304346,
            "unit": "ns",
            "range": "± 179417.62187813027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2484572.431578947,
            "unit": "ns",
            "range": "± 197452.63915439358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6890775.642105263,
            "unit": "ns",
            "range": "± 487502.5144229955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3312667.9178082193,
            "unit": "ns",
            "range": "± 159323.1634003105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455807.906779661,
            "unit": "ns",
            "range": "± 150089.3108243496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503509.063829787,
            "unit": "ns",
            "range": "± 274592.4374333776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4332187.265957447,
            "unit": "ns",
            "range": "± 311621.2602838003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7747512.5,
            "unit": "ns",
            "range": "± 338867.79581465945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6612012.909237132,
            "unit": "ns",
            "range": "± 127246.19048398992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998641.2911658655,
            "unit": "ns",
            "range": "± 15246.767250385383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244576.8931361607,
            "unit": "ns",
            "range": "± 12049.415350190739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540779.013113839,
            "unit": "ns",
            "range": "± 38192.54877360724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826842.7042317708,
            "unit": "ns",
            "range": "± 9877.799747279973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777274.8534342448,
            "unit": "ns",
            "range": "± 5498.138187626652"
          }
        ]
      }
    ]
  }
}